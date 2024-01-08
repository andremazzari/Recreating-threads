import {Container,
        ImgLogoThreads,
        UserHeader, UserHeaderInfo, UserHeaderPhotoContainer, UserHeaderInfoName, UserHeaderInfoUsernameContainer, UserHeaderInfoUsername, UserHeaderThreadsButton, UserHeaderPhoto,
        UserBio } from "./styled";
import LogoThreads from '../../assets/images/threads-app-icon.svg';
import Photo from '../../assets/images/user_photos/andre_mazzari.jpg'

export function Profile() {
    let userData = {
        name: 'Andre Mazzari',
        username: 'andre_mazzari',
        bio: '💼Engenheiro de dados.\n🎓Mestre em Física.',
        photo_url: process.env.PUBLIC_URL + '/assets/images/user_photos/andre_mazzari.jpg'
    }

    const bio_length = userData['bio'].split('\n').length;

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
        </Container>
    );
}