import moment from "moment";

export default (posts) => {
    return posts.filter((post) => {
        const createdAtMoment = moment(post.createdAt);

    }).sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    })
};