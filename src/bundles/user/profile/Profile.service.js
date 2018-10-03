import { config } from '../../../config';
import Session from "../../user/Session/Session";

export const postProfileImage = (image) => {
    return fetch(`${config.main_domain_url}/user-api/update-image`, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Session.getToken()}`,
        }),
        body: JSON.stringify({
            image: image,
        })
    });
};