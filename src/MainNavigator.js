import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainSelectScreen from './screens/MainSelectScreen';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/Signing/SignInScreen';
import SignUpScreen from './screens/Signing/SignUpScreen';
import SelectUserTypeScreen from './screens/SelectUserTypeScreen';
import CompanyInfoScreen from './screens/CompanyInfoScreen';
import UserPanelListScreen from './screens/UserPanelListScreen';
import ManagementWaitingScreen from './screens/ManagementWaitingScreen';
import ManagementDoneScreen from './screens/ManagementDoneScreen';
import ManagementScreen from './screens/ManagementScreen';
import PanelDetailScreen from './screens/PanelDetailScreen';
import ConsultAddScreen from './screens/Consult/ConsultAddScreen';
import ConsultListScreen from './screens/Consult/ConsultListScreen';
import ConsultDetailScreen from './screens/Consult/ConsultDetailScreen';
import ConsultAnswerScreen from './screens/Consult/ConsultAnswerScreen';
import SellerResisterScreen from './screens/Mypage/SellerResisterScreen';
import SellerPanelListScreen from './screens/Mypage/SellerPanelListScreen';
import SellerPanelDetailScreen from './screens/Mypage/SellerPanelDetailScreen';
import SellerInfoScreen from './screens/Mypage/SellerInfoScreen';
import SellerModifyScreen from './screens/Mypage/SellerModifyScreen';
import SellerScreen from './screens/Mypage/SellerScreen';
import BuyerScreen from './screens/Mypage/BuyerScreen';
import SettingScreen from './screens/SettingScreen';
import CertScreen from './screens/CertScreen';
import NativeBaseDrawer from './screens/NativeBaseDrawer';
import PhotoScreen from './screens/PhotoScreen';
import TermOfServiceScreen from './screens/TermOfServiceScreen';
import policy1 from './screens/policy1';
import policy2 from './screens/policy2';
import SignUp_select from './screens/SignUp_select';
import SignUp_seller from './screens/Signing/SignUp_seller';
import practice from './screens/practice';
import searchId from './screens/searchId';
import searchId_result from './screens/searchId_result';
import searchPwd from './screens/searchPwd';
import searchPwd_result from './screens/searchPwd_result';
import SellerScreen_new from './screens/Mypage/SellerScreen_new';
import BuyerScreen_new from './screens/Mypage/BuyerScreen_new';
import regist_certify from './screens/Mypage/regist_certify';
import regist_certify_2 from './screens/Mypage/regist_certify_2';
import regist_certify_result from './screens/Mypage/regist_certify_result';
import scene_diagnosis from './screens/scene_diagnosis';
import ProductRegist from './screens/ProductRegist';
import ProductRegist2 from './screens/ProductRegist2';
import ProductRegistFin from './screens/ProductRegistFin';
import MyProduct from './screens/MyProduct';
import MyProductInf from './screens/MyProductInf';
import ConsultRequest from './screens/ConsultRequest';
import adminPage from './screens/adminPage';
import Admin_UserManage from './screens/Admin_UserManage';
import Admin_ProductManage from './screens/Admin_ProductManage';
import AdminPanelListScreen from './screens/AdminPanelListScreen';

const MainNavigator = createStackNavigator({
    //앱 시작시 인증
    //AuthLoading : {screen:AuthLoadingScreen},
    MainSelectScreen:{screen:MainSelectScreen},
    HomeScreen:{screen:HomeScreen},
    policy1:{screen:policy1},
    policy2:{screen:policy2},
    SignUp_select:{screen:SignUp_select},
    SignUp_seller:{screen:SignUp_seller},
    practice:{screen:practice},
    searchId:{screen:searchId},
    searchId_result:{screen:searchId_result},
    searchPwd:{screen:searchPwd},
    searchPwd_result:{screen:searchPwd_result},
    SellerScreen_new:{screen:SellerScreen_new},
    BuyerScreen_new:{screen:BuyerScreen_new},
    regist_certify:{screen:regist_certify},
    regist_certify_2:{screen:regist_certify_2},
    regist_certify_result:{screen:regist_certify_result},
    scene_diagnosis:{screen:scene_diagnosis},
    ProductRegist:{screen:ProductRegist},
    ProductRegist2:{screen:ProductRegist2},
    ProductRegistFin:{screen:ProductRegistFin},
    MyProduct:{screen:MyProduct},
    MyProductInf:{screen:MyProductInf},
    ConsultRequest:{screen:ConsultRequest},
    adminPage:{screen:adminPage},
    Admin_ProductManage:{screen:Admin_ProductManage},
    Admin_UserManage:{screen:Admin_UserManage},
    AdminPanelListScreen:{screen:AdminPanelListScreen},


    SignInScreen:{screen:SignInScreen},
    SignUpScreen:{screen:SignUpScreen},

    SelectUserTypeScreen:{screen:SelectUserTypeScreen},
    CompanyInfoScreen:{screen:CompanyInfoScreen},

    UserPanelListScreen:{screen:UserPanelListScreen},

    ManagementWaitingScreen:{screen:ManagementWaitingScreen},
    ManagementDoneScreen:{screen:ManagementDoneScreen},
    ManagementScreen:{screen:ManagementScreen},

    PanelDetailScreen:{screen:PanelDetailScreen},

    ConsultAddScreen:{screen:ConsultAddScreen},
    ConsultListScreen:{screen:ConsultListScreen},
    ConsultDetailScreen:{screen:ConsultDetailScreen},
    ConsultAnswerScreen:{screen:ConsultAnswerScreen},

    SellerResisterScreen:{screen:SellerResisterScreen},
    SellerPanelListScreen:{screen:SellerPanelListScreen},
    SellerInfoScreen:{screen:SellerInfoScreen},
    SellerPanelDetailScreen:{screen:SellerPanelDetailScreen},
    SellerModifyScreen:{screen:SellerModifyScreen},
    SellerScreen:{screen:SellerScreen},

    BuyerScreen:{screen:BuyerScreen},

    SettingScreen:{screen:SettingScreen},

    CertScreen:{screen:CertScreen},

    NativeBaseDrawer:{screen:NativeBaseDrawer},

    PhotoScreen:{screen:PhotoScreen},

    TermOfServiceScreen:{screen:TermOfServiceScreen},
    
},{
    initialRouteName : 'MainSelectScreen',
    headerMode : 'none',
})

const App = createAppContainer(MainNavigator);
export default App;