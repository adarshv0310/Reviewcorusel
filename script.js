const $ = document;
let img = $.querySelector("img");
let title = $.querySelector("h4");
let span = $.querySelector("span");
let text = $.querySelector("p");
let pre = $.getElementsByClassName("pre")[0];
let next = $.getElementsByClassName("next")[0];

const data = [{
        id: 1,
        img: "https://randomuser.me/api/portraits/women/72.jpg",
        title: "San Andreas",
        span: "Web developer",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum dolor sit amet consecteturipsum dolor sit amet consectetur ",
    },
    {
        id: 2,
        img: "https://randomuser.me/api/portraits/women/79.jpg",
        title: "Amanda harry",
        span: "Back-End developer",
        text: "Lorem ipsum ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur",
    },
    {
        id: 3,
        img: "https://randomuser.me/api/portraits/men/0.jpg",
        title: "scarllet jon",
        span: "Front-End developer",
        text: "Lorem ipsum dolor sitipsum dolor sit amet consecteturcteturipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
        id: 4,
        img: "https://randomuser.me/api/portraits/men/84.jpg",
        title: "Thomas shelby",
        span: "Actor",
        text: "He is the leader of the Birmingham criminal gang, the Peaky Blinders and the patriarch of the Shelby Family. Thomas served in World War I with the rank of Sergeant Major and received medals for gallantry (which he threw away in a canal after returning from the war).",
    },
];

let current = 1;

// upload data in first
window.onload = () => {
    setData(data);
};

// add pre logic
pre.addEventListener("click", () => {
    if (current != 1) {
        current--;
    } else {
        current = 4;
    }

    setData(data);
});

// add next logic
next.addEventListener("click", () => {
    if (current != 4) {
        current++;
    } else {
        current = 1;
    }

    setData(data);
});

// set variables
const setData = (arr) => {
    img.src = arr[current - 1].img;
    title.innerText = arr[current - 1].title;
    span.innerText = arr[current - 1].span;
    text.innerText = arr[current - 1].text;
};