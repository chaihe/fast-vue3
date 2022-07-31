// 权限问题后期增加
import { get, post } from '/@/utils/http/axios';
import { UserState } from '/@/store/modules/user/types';
// import axios from 'axios';
enum URL {
  login = '/user/login',
  logout = '/user/logout',
  profile = '/user/profile',
  infolist = '/admin/order/info-list?day=20220729&page=0&count=10&sell_uid=1246&order_status=2',
}
interface LoginRes {
  token: string;
}

export interface LoginData {
  username: string;
  password: string;
}

const getUserProfile = async () => get<UserState>({ url: URL.profile });
const login = async (data: LoginData) => post<any>({ url: URL.login, data });
const logout = async () => post<LoginRes>({ url: URL.logout });
const getOrderList = async () => get<any>({ url: URL.infolist });
export { getUserProfile, logout, login, getOrderList };
