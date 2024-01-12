import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {Container,
        ImgLogoThreads,
        UserHeader, UserHeaderInfo, UserHeaderPhotoContainer, UserHeaderInfoName, UserHeaderInfoUsernameContainer, UserHeaderInfoUsername, UserHeaderThreadsButton, UserHeaderPhoto,
        UserBio,
        UserFollowersIconsContainer, UserIconsContainer, UserFollowers, UserIcon,
        ThreadsRespostasContainer, ThreadsRespostasMenu, ThreadsRespostasMenuItem,
        ThreadContainer, ThreadPhotoContainer, ThreadPhotoImg,
        ThreadPostInfo, ThreadPostInfoHeader, ThreadPostInfoHeaderDateContainer, ThreadPostInfoHeaderDate, ThreadPostInfoHeaderMoreOptions,
        ThreadPostInfoContent, ThreadPostInfoButtonsContainer, ThreadPostInfoButtonImg, ThreadPostInfoLikes} from "./styled";

import LogoThreads from '../../assets/images/threads-app-icon.svg';
import LogoInstagram from '../../assets/images/instagram-icon.svg';
import EllipsisIcon from '../../assets/images/ellipsis-icon.svg';
import EllipsisNoCircleIcon from '../../assets/images/ellipsis-no-circle-icon.svg';

import ThreadLike from '../../assets/images/thread-icon/like.svg';
import ThreadMessage from '../../assets/images/thread-icon/message.svg';
import ThreadRetweet from '../../assets/images/thread-icon/retweet.svg';
import ThreadSend from '../../assets/images/thread-icon/send.svg';

type userDataType = {
    name: string,
    username: string,
    bio: string,
    photo_url: string,
    n_followers: number
}

const defaultUserData:userDataType = {
                                        name: 'Default user',
                                        username: 'default',
                                        bio: 'A standard bio for a default user.',
                                        photo_url: process.env.PUBLIC_URL + '/assets/images/user_photos/default.png',
                                        n_followers: 100
                                    }

function getUserData(username: string | undefined):userDataType {
    let userData:userDataType;

    //upgrade: fetch data from database
    if (username == 'andre_mazzari') {
        userData = {
                    name: 'Andre Mazzari',
                    username: username,
                    bio: '💼Engenheiro de dados.\n🎓Mestre em Física.',
                    photo_url: process.env.PUBLIC_URL + '/assets/images/user_photos/andre_mazzari.jpg',
                    n_followers: 37
                    }
    } else {
        userData = defaultUserData;
        if (username !== undefined) {
            userData['username'] = username;
        }
    }

    return userData;
}

interface ThreadPostProps {
    username: string;
    photo_url: string;
    time: string;
    content: string;
    likes: number;
}

function ThreadPost({username, photo_url, time, content, likes}: ThreadPostProps) {
    return (
        <ThreadContainer>
            <ThreadPhotoContainer>
                <ThreadPhotoImg src={photo_url}/>
            </ThreadPhotoContainer>
            <ThreadPostInfo>
                <ThreadPostInfoHeader>
                    <span className="ThreadsUsername">
                        {username}
                    </span>

                    <ThreadPostInfoHeaderDateContainer>
                        <ThreadPostInfoHeaderDate>
                            {time}
                        </ThreadPostInfoHeaderDate>

                        <ThreadPostInfoHeaderMoreOptions src={EllipsisNoCircleIcon} alt='More options'/>
                    </ThreadPostInfoHeaderDateContainer>
                </ThreadPostInfoHeader>
                
                <ThreadPostInfoContent>
                    {content}
                </ThreadPostInfoContent>

                <ThreadPostInfoButtonsContainer>
                        <ThreadPostInfoButtonImg src={ThreadLike}/>
                        <ThreadPostInfoButtonImg src={ThreadMessage}/>
                        <ThreadPostInfoButtonImg src={ThreadRetweet}/>
                        <ThreadPostInfoButtonImg src={ThreadSend}/>
                </ThreadPostInfoButtonsContainer>

                <ThreadPostInfoLikes>
                    {likes} curtidas
                </ThreadPostInfoLikes>
            </ThreadPostInfo>
        </ThreadContainer>
    )
}

export function Profile() {
    const [userData, setUserData] = useState<userDataType>(defaultUserData);
    const username = useParams().username;

    useEffect(() => {
        setUserData(getUserData(username));
    },[])

    const bio_length = userData['bio'].split('\n').length;

    //states
    const [selectedMenu, setSelectedMenu] = useState<'threads' | 'respostas'>('threads');

    return (
        <Container>
            <ImgLogoThreads src={LogoThreads} alt="Threads logo"/>

            <UserHeader>
                <UserHeaderInfo>
                    <UserHeaderInfoName>
                        {userData['name']}
                    </UserHeaderInfoName>
                    <UserHeaderInfoUsernameContainer>
                        <UserHeaderInfoUsername>
                            {userData['username']}
                        </UserHeaderInfoUsername>
                        <UserHeaderThreadsButton>
                            threads.net
                        </UserHeaderThreadsButton>
                    </UserHeaderInfoUsernameContainer>
                </UserHeaderInfo>
                <UserHeaderPhotoContainer>
                    <UserHeaderPhoto src={userData['photo_url']} alt='user photo' />
                </UserHeaderPhotoContainer>
            </UserHeader>
            <UserBio>
                <p>
                    {userData['bio'].split('\n').map((line, index) => (
                        <>
                            {line}
                            {index < bio_length - 1 && <br/>}
                        </>
                    ))}
                </p>
            </UserBio>
            <UserFollowersIconsContainer>
                <UserFollowers>
                    {userData['n_followers'] + ' seguidores'}
                </UserFollowers>

                <UserIconsContainer>
                    <a href={`https://www.instagram.com/${userData['username']}`}>
                        <UserIcon src={LogoInstagram} alt='Instagram profile' size='23px'/>
                    </a>

                    <UserIcon src={EllipsisIcon} alt='More options' size='24px'/>
                </UserIconsContainer>
            </UserFollowersIconsContainer>

            <ThreadsRespostasContainer>
                <ThreadsRespostasMenu>
                    <ThreadsRespostasMenuItem selected={selectedMenu == 'threads' ? true : false} onClick={() => {setSelectedMenu('threads')}}>
                        Threads
                    </ThreadsRespostasMenuItem>
                    <ThreadsRespostasMenuItem selected={selectedMenu == 'respostas' ? true : false} onClick={() => {setSelectedMenu('respostas')}}>
                        Respostas
                    </ThreadsRespostasMenuItem>
                </ThreadsRespostasMenu>
                <ThreadPost username={userData['username']} photo_url={userData['photo_url']} time='8h' content='Este é meu primeiro Thread' likes={9}/> 
            </ThreadsRespostasContainer>
        </Container>
    );
}