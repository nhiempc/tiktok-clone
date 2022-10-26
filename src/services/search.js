import { get } from '~/utils/request';

const getPreviewSearch = async (querry, type = 'less') => {
    try {
        const res = await get('users/search', {
            params: {
                q: querry,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const searchServices = {
    getPreviewSearch,
};
