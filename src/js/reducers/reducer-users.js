/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Robert",
            last: "Johnson",
            age: 23,
            description: "Robert is a full Stack Developer",
            thumbnail: "http://www.mobrosblog.co.uk/wp-content/uploads/2016/01/Van-Dyck-Beard-.jpg"
        },
        {
            id: 2,
            first: "Sky",
            last: "Williams",
            age: 31,
            description: "sky loves android Game development.",
            thumbnail: "http://law.olemiss.edu/assets/misty_thumb-400x400.jpg"
        },
        {
            id: 3,
            first: "Scott",
            last: "Rayner",
            age: 24,
            description: "Scott likes Open source collaboration.",
            thumbnail: "https://pbs.twimg.com/profile_images/826988548654059520/olOsb6JL.jpg"
        }
    ]
}
