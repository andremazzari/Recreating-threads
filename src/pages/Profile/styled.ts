import styled, {createGlobalStyle} from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 27px;
    width: 570px;
    color: #f3f5f7;
    font-family: 'Roboto', sans-serif;
`;

export const ImgLogoThreads = styled.img`
    height: 45px;
    margin-bottom: 40px;
`;

export const UserHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const UserHeaderInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const UserHeaderPhotoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

export const UserHeaderInfoName = styled.h2`
    font-weight: 700;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 6px;
`;

export const UserHeaderInfoUsernameContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const UserHeaderInfoUsername = styled.span`
    font-size: 14px;
`;

export const UserHeaderThreadsButton = styled.button`
    width: 71px;
    height: 25px;
    border-radius: 12px;
    background-color: #3A3A3A;
    color: #777777;
    font-size: 10px;
    border: 0;
    padding: 6px 8px;
    cursor: pointer;
`;

export const UserHeaderPhoto = styled.img`
    width: 84px;
    border-radius: 50%;
    cursor: pointer;
`;

export const UserBio = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-size: 14px;
    margin-bottom: 10px;
`;

export const UserFollowersIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const UserFollowers = styled.span`
    text-decoration: none;
    color: #777777;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const UserIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 18px;
    height: 100%;

    a {
        display: flex;
        align-items: center;
    }
`;

interface UserIconProps {
    size: string
}
export const UserIcon = styled.img<UserIconProps>`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    cursor: pointer;
`;