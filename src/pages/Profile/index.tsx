import { useState } from "react";

import {Container,
        ImgLogoThreads,
        UserHeader, UserHeaderInfo, UserHeaderPhotoContainer, UserHeaderInfoName, UserHeaderInfoUsernameContainer, UserHeaderInfoUsername, UserHeaderThreadsButton, UserHeaderPhoto,
        UserBio,
        UserFollowersIconsContainer, UserIconsContainer, UserFollowers, UserIcon,
        ThreadsRespostasContainer, ThreadsRespostasMenu, ThreadsRespostasMenuItem } from "./styled";

import LogoThreads from '../../assets/images/threads-app-icon.svg';
import LogoInstagram from '../../assets/images/instagram-icon.svg';
import EllipsisIcon from '../../assets/images/ellipsis-icon.svg';

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
            </ThreadsRespostasContainer>
        </Container>
    );
}