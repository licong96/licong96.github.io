import ax from '../axios';
import { URL } from '../../config/url';

export function get(
	params: any
): Promise<Ajax.Response> {
	return ax.get(`${URL.ENV}/get`, { params }).then((res: any) => res.data);
}