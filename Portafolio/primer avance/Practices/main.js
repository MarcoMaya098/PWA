array = [1, 2, 3, 4, 5, "fii", "bar", true, 2.5];

obj = {
    first_name: "Foo",
    last_name: "Bar",
    age: 23,
    status: true
}

console.log(array[5])
console.log(obj.age)
console.log(obj["first_name"])

console.log(obj.last_name)


for (let index = 0; index < 100; index++) {
    console.log(index)
}


for (let index = 0; index < array.length; index++) {
    console.log(array[index]);

}

for (var i of array) {
    console.log(i)
}

// of EN ARRAYS  ~~ in EN OBJETOS

for (var key of Object.keys(obj)) {
    console.log(key + "; " + obj[key])
}


for (var key in obj) {
    console.log(key + "; " + obj[key])
}


var i = 0
while (i < 10) {
    console.log(i);
    i++
}



do {
    console.log("--" + i);
} while (1 < 10);



// SENTENCIAS DE CONTROL

var x = 890
if (x > 90) {
    console.log("Si es mayor");
} else {
    console.log("Si es menor");
}

var animal = "Kitty"

if (animal === "Kitty") {
    console.log("It is a kitty");
} else {
    console.log("It not is a kitty");
}

// operador ternario

var cat = (animal != "Kitty") ? console.log("It is a kitty") : console.log("It not is a kitty");

switch (animal) {
    case "Kitty":
        console.log("Case One");
        break;
    case "Puppy":
        console.log("Case Two");
        break;
    default:
        console.log("Other wise");
        break;
}



// CURRYNG
// object: to protecte paramaters of the function


function prism(l) {
    return function (w) {
        return function (h) {
            return l * w * h;
        }
    }
}
var prism = l => w => h => l * w * h;

console.log(prism(21)(22)(23));


const foo = (function () {
    console.log("I am the LIFE");
    return "PAMA  the life"
}());

console.log(foo);


var message = "Hello world"
const fooo = (function (msg) {
    console.log(`I am the LIFE ${msg}`);
    return msg
}(message))





var prism = function (l, w, h) {
    return l * w * h;
}
console.log(prism(1, 2, 3));

var sumtotal = function sum(a, b) {
    return a + b;
}

sum(1, 3)

// FUNCIIONES ANONIMAS, Y NOMBRADAS


var say = function (times) { // ERROR
    var say = function say(times) {  // CORRECT
        say = undefined
        if (times > 0) {
            console.log("Hello");
            say(times - 1)
        }
    }
}

var saysay = say;
say = "oops"
saysay(100)


function Person(person, ...msg) {
    msg.forEach(arg => {
        console.log(person + " say: " + arg);
    });
}

Person("Foo")

Person("Foo", "Hello", "JS", "REACT", "NATIVE", "PWA")



FECTH

const url =
    'http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript';

fetch(url)
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));

userid, reutation

var responseData = fetch(url).then(response => response.json());

responseData.then(({ items, has_more, quota_max, quota_remaining }) => {
    for (const { title, question_id, owner } of items) {
        console.log(question_id + " title: " + title + " user: "
            + owner.display_name + " reputation: " + owner.reputation
            + " user_id: " + owner.user_id);
    }
})

const url2 = 'https://jsonplaceholder.typicode.com/users';

var responseData2 = fetch(url2).then(response => response.json());
responseData2.then(json => console.log(json))

fetch(url2).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("user: " + element.username
                + " city: " + element.address.city);
        });
    })


fetch(url2, {
    method: "POST",
    headers: {
        "Content_type": "application/json",
    },
    body: JSON.stringify({
        username: "Foo",
        email: "foo@foo.com"
    })
}).then(response => response.json())
    .then(response => console.log(response))


const url3 = 'https://jsonplaceholder.typicode.com/posts';


fetch(url3).then(response => response.json())
    .then(response => {
        response.forEach(element => {
            console.log("user:Id " + element.userId
                + " title: " + element.title
                + " body" + element.body
            );
        });
    })


fetch(url3, {
    method: "POST",
    headers: {
        "Content_type": "application/json",
    },
    body: JSON.stringify({
        userId: 2,
        title: "Lorem Ipsun ETC ETC"
    })
}).then(response => response.json())
    .then(response => console.log(response))




responseData2.then(({ items, has_more, quota_max, quota_remaining }) => {
    for (const { name, username, address, company, } of items) {
        console.log(name + " username: " + username + " street: "
            + address.street + " city: " + address.city
            + " company: " + company.name);
    }
})


//  const questionList = document.createElement('ul');
// document.body.appendChild(questionList);
// const responseData = fetch(url).then(response => response.json());
// responseData.then(({items, has_more, quota_max, quota_remaining}) => {
//  for (const {title, score, owner, link, answer_count} of items) {
//  const listItem = document.createElement('li');
//  questionList.appendChild(listItem);
//  const a = document.createElement('a');
//  listItem.appendChild(a);
//  a.href = link;
//  a.textContent = `[${score}] ${title} (by ${owner.display_name || 'somebody'})`
//  }
// });


