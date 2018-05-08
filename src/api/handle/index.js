import ajax from "@/api/config/AjaxClient"

const index = (options) => {
    ajax.fetch("", 'get', options);
};

export default {index};