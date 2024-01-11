import { useState } from "react";

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
    let userData = {
        name: 'Andre Mazzari',
        username: 'andre_mazzari',
        bio: '💼Engenheiro de dados.\n🎓Mestre em Física.',
        photo_url: process.env.PUBLIC_URL + '/assets/images/user_photos/andre_mazzari.jpg',
        n_followers: 37
    }

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
                <ThreadPost username={userData['username']} photo_url={userData['photo_url']} time='8h' content='Já tinha até esquecido que eu tinha esse app aqui.' likes={9}/> 
            </ThreadsRespostasContainer>
        </Container>
    );
}