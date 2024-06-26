import DashboardHeader from '@/components/DashboardHeader/DashboardHeader';
import SideMenu from '@/components/side-menu/SideMenu';
import * as S from './edit.style';
import DashboardNewName from '@/components/dashboard-edit/DashboardNewName';
import { Arrow_forward } from '@/components/Icons';
import Table from '@/components/table/Table';
import { useRouter } from 'next/router';

const DashboardEdit = () => {
  const router = useRouter();
  const { dashboardid } = router.query;
  const dashboardId = typeof dashboardid === 'string' ? parseInt(dashboardid) : undefined;
  console.log(dashboardid);

  return (
    <S.DashboardEditStyle>
      <SideMenu />
      <S.DashboardWrapperStyle>
        {dashboardid && <DashboardHeader isVisible='false' children='' dashboardId={dashboardid} />}
        <S.DashboardMainStyle>
          <S.DashboardBackStyle>
            <Arrow_forward $width='2rem' $height='2rem' />
            <p>돌아가기</p>
          </S.DashboardBackStyle>
          <S.DashboardBoardListStyle>
            {dashboardId && <DashboardNewName dashboardId={dashboardId} children='대시보드 수정' />}
            {dashboardId && <Table title='구성원' userList='이름' dashboardId={dashboardId} />}
            {dashboardId && <Table title='초대 내역' userList='이메일' dashboardId={dashboardId} />}
          </S.DashboardBoardListStyle>
        </S.DashboardMainStyle>
      </S.DashboardWrapperStyle>
    </S.DashboardEditStyle>
  );
};

export default DashboardEdit;
