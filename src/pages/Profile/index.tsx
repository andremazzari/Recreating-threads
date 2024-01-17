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
        ThreadPostInfoContent, ThreadPostInfoButtonsContainer, ThreadPostInfoButtonImg, ThreadPostInfoLikes, ThreadPostEmpty} from "./styled";

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

interface ThreadPostContentProps {
    time: string;
    content: string;
    likes: number;
}

function getUserThreads(username: string):ThreadPostContentProps[] {
    //future update: get data from database
    let userThreads:ThreadPostContentProps[];

    if (username == 'default') {
        userThreads = [];
    } else {
        userThreads = [
            {
                time: '5h',
                content: 'Este é o segundo thread',
                likes: 157
            },
            {
                time: '8h',
                content: 'Este é meu primeiro Thread',
                likes: 9
            }
        ]
    }

    return userThreads;
}

interface ThreadPostProps {
    username: string,
    photo_url: string,
    threadContent: {
        time: string;
        content: string;
        likes: number;
    }
}

function ThreadPost({username, photo_url, threadContent}: ThreadPostProps) {
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
                            {threadContent.time}
                        </ThreadPostInfoHeaderDate>

                        <ThreadPostInfoHeaderMoreOptions src={EllipsisNoCircleIcon} alt='More options'/>
                    </ThreadPostInfoHeaderDateContainer>
                </ThreadPostInfoHeader>
                
                <ThreadPostInfoContent>
                    {threadContent.content}
                </ThreadPostInfoContent>

                <ThreadPostInfoButtonsContainer>
                        <ThreadPostInfoButtonImg src={ThreadLike}/>
                        <ThreadPostInfoButtonImg src={ThreadMessage}/>
                        <ThreadPostInfoButtonImg src={ThreadRetweet}/>
                        <ThreadPostInfoButtonImg src={ThreadSend}/>
                </ThreadPostInfoButtonsContainer>

                <ThreadPostInfoLikes>
                    {threadContent.likes} curtidas
                </ThreadPostInfoLikes>
            </ThreadPostInfo>
        </ThreadContainer>
    )
}


interface ThreadsContentProps {
    username: string;
    photo_url: string;
}
function ThreadsContent({username, photo_url}:ThreadsContentProps) {
    const [userThreads, setUserThreads] = useState<ThreadPostContentProps[]>([])

    useEffect(() => {
        //future update: get data from database async
        setUserThreads(getUserThreads(username))
    }, [])

    return (
        <>
        {
            userThreads.length > 0 ? userThreads.map((threadContent, index) => <ThreadPost key={index} username={username} photo_url={photo_url} threadContent={threadContent}/>) : <ThreadPostEmpty>Ainda sem sequências.</ThreadPostEmpty>
        }
        </>
    )
}

function RespostasContent() {
    //future update: implement answers and get data from database
    //For now, only print "Ainda sem respostas"
    return (
        <ThreadPostEmpty>Ainda sem respostas.</ThreadPostEmpty>
    )
}

export function Profile() {
    //Route params
    let username = useParams().username;
    
    //states
    const [selectedMenu, setSelectedMenu] = useState<'threads' | 'respostas'>('threads');
    const [userData, setUserData] = useState<userDataType>(getUserData(username));


    useEffect(() => {
        //future update: get data from database async
        setUserData(getUserData(username));

    },[username])

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
                    {userData['bio'].split('\n').map((line, index) => <li key={index}>{line}</li>)}
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
                {
                    selectedMenu == 'threads' ? <ThreadsContent username={userData['username']} photo_url={userData['photo_url']}/> : <RespostasContent/>
                }
            </ThreadsRespostasContainer>
        </Container>
    );
}