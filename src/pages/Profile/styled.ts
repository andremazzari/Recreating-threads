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
    margin-bottom: 10px;
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

export const UserBio = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    font-size: 14px;
    padding: 0;
    margin-bottom: 20px;
`;

export const UserFollowersIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
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

export const ThreadsRespostasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const ThreadsRespostasMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

interface ThreadsRespostasMenuItemProps {
    selected: boolean
}
export const ThreadsRespostasMenuItem = styled.div<ThreadsRespostasMenuItemProps>`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 48px;
    font-size: 15px;
    font-weight: ${(props) => props.selected ? '500' : '400'};
    border-bottom: ${(props) => props.selected ? '1px solid white' : '1px solid rgba(243, 245, 247, 0.15)'};
    color: ${(props) => props.selected ? 'currentColor' : 'rgb(119, 119, 119)'};
    cursor: pointer;
`;

export const ThreadContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    padding-top: 20px;
    margin-bottom: 15px;
`;

export const ThreadPhotoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-right: 12px;
    padding-top: 4px;
`;

export const ThreadPhotoImg = styled.img`
    border-radius: 50%;
    width: 36px;
    height: 36px;
`;

export const ThreadPostInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const ThreadPostInfoHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;

    .ThreadsUsername {
        font-weight: 500;
        font-size: 16px;
    }
`;

export const ThreadPostInfoHeaderDateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`;

export const ThreadPostInfoHeaderDate = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: rgb(119, 119, 119);
    font-weight: 400;
`;

export const ThreadPostInfoHeaderMoreOptions = styled.img`
    width: 20px;
    cursor: pointer;
`;

export const ThreadPostInfoContent = styled.span`
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 6px;
`;

export const ThreadPostInfoButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 13px;
    margin-bottom: 8px;
`;

export const ThreadPostInfoButtonImg = styled.img`
    width: 25px;
    cursor: pointer;
    border-radius: 50%;
    padding: 7px;

    &:hover {
        background-color: rgba(230,230,230,0.2);
    }
`;

export const ThreadPostInfoLikes = styled.span`
    font-size: 15px;
    color: rgb(119, 119, 119);
    font-weight: 400;
    cursor:pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const ThreadPostEmpty = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding-top: 80px;
    padding-bottom: 80px;
    font-weight: 400;
    color: rgb(119, 119, 119);
    font-size: 16px;
`;

export const ThreadPostSeparator = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgb(110, 110, 110);
`;