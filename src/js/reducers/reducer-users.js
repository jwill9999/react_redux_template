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
            thumbnail: "https://s-media-cache-ak0.pinimg.com/736x/4b/54/9c/4b549cb826bfe38a6461861cb3a81adb.jpg"
        },
        {
            id: 2,
            first: "Sky",
            last: "Williams",
            age: 31,
            description: "sky loves android Game development.",
            thumbnail: "http://i1.mirror.co.uk/incoming/article5428573.ece/ALTERNATES/s615b/archetypal-female-_3249633c.jpg"
        },
        {
            id: 3,
            first: "Scott",
            last: "Rayner",
            age: 24,
            description: "Scott likes Open source collaboration.",
            thumbnail: "http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/m_sexy_gr.jpg"
        }
    ]
}
