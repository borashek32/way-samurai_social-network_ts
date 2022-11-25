type MessageType = {
    id: number
    text: string
}
type DialogType = {
    id: number
    userName: string
    text: string
}
type PostType = {
    id: number
    isPublished: boolean
    title: string
    likes: number
    desc: string
}
type ProfilePageType = {
    title: string
    posts: Array<PostType>
}
type DialogPageType = {
    dialogsTitle: string
    dialogs: Array<DialogType>
    messagesTitle: string
    messages: Array<MessageType>
}
type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        title: "My posts",
        posts: [
            {id: 1, isPublished: false, title: "React", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: 2, isPublished: false, title: "JS", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: 3, isPublished: true, title: "PHP", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: 4, isPublished: false, title: "Ruby", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: 5, isPublished: false, title: "ReactJS", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"},
            {id: 6, isPublished: true, title: "VueJS", likes: 10, desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid maiores modi molestias optio quod suscipit? Facilis mollitia ut veritatis!"}
        ],
    },
    dialogsPage: {
        dialogsTitle: "Dialogs",
        dialogs: [
            {id: 1, userName: "Polina", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
            {id: 2, userName: "Vadim", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
            {id: 3, userName: "Igor", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
            {id: 4, userName: "Olga", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
            {id: 5, userName: "Petr", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
        ],
        messagesTitle: "Messages from ",
        messages: [
            {id: 1, text: "Lorem ipsum dolor"},
            {id: 2, text: "Lorem ipsum dolor"},
            {id: 3, text: "Lorem ipsum dolor"},
            {id: 4, text: "Lorem ipsum dolor"},
            {id: 5, text: "Lorem ipsum dolor"}
        ]
    },
    sidebar: {}
}

export default state