import {Container,
        ImgLogoThreads,
        UserHeader, UserHeaderInfo, UserHeaderPhotoContainer, UserHeaderInfoName, UserHeaderInfoUsernameContainer, UserHeaderInfoUsername, UserHeaderThreadsButton, UserHeaderPhoto } from "./styled";
import LogoThreads from '../../assets/images/threads-app-icon.svg';
import Photo from '../../assets/images/user_photos/andre_mazzari.jpg'

export function Profile() {
    let userData = {
        name: 'Andre Mazzari',
        username: 'andre_mazzari',
        description: '',
        photo_url: process.env.PUBLIC_URL + '/assets/images/user_photos/andre_mazzari.jpg'
    }

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
        </Container>
    );
}