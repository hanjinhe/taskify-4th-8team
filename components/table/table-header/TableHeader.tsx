import Image from 'next/image';
import * as S from './TableHeader.style';

interface TableHeaderType {
  title: string;
  userList: string;
}

const TableHeader = ({ title, userList }: TableHeaderType) => {
  return (
    <S.TableHeader>
      <S.TitleContainer>
        <S.Title>{title}</S.Title>
        <S.PaginationContainer>
          <S.PageNumber>1페이지 중 1</S.PageNumber>
          <div>
            <S.ArrowBackPage src='/assets/table/arrow_forward.svg' alt='이전 페이지로' width={40} height={40} />
            <S.ArrowNextPage src='/assets/table/arrow_forward.svg' alt='다음 페이지로' width={40} height={40} />
          </div>
          {!(title === '구성원') && <S.Button>초대하기</S.Button>}
        </S.PaginationContainer>
      </S.TitleContainer>
      <S.ListTitleContainer>
        <S.ListName>{userList}</S.ListName>
        {!(title === '구성원') && <S.MobileButton>초대하기</S.MobileButton>}
      </S.ListTitleContainer>
    </S.TableHeader>
  );
};

export default TableHeader;
