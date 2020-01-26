let sampleClass = document.querySelectorAll(".sample_class");

function getTagsOfElements(elements) {
    let array = [];
    for (i = 0; i < elements.length; i++) {
        let tags = elements[i].tagName;
        array.push(tags);
    }
    return array;
}
console.log(getTagsOfElements(sampleClass));

let sampleId = document.querySelector("#sample_id");

function getClassesOfElement(element) {
    let array = [];
    let classNamesArray = element.className;
    array.push(classNamesArray);
    return array;
}
console.log(getClassesOfElement(sampleId));

var listElements = document.querySelector('.sample_class_2').getElementsByTagName("li");

function getInnerTextsOfElements(elements) {
let array = [];
for (let i = 0; i < elements.length; i++) {
    let liText = elements[i].innerText;
    array.push(liText);
}
return array;
}
console.log(getInnerTextsOfElements(listElements));

let links = document.getElementsByTagName('a');

function getAddressesOfElements(elements) {
let array = [];
for (let i = 0; i < elements.length; i++) {
    let href = elements[i].getAttribute("href");
    array.push(href);
}
return array;
}
console.log(getAddressesOfElements(links));

let sampleClass3Childrens = document.querySelector(".sample_class_3").children;

function findTags(elements) {
    let array = [];
    for (let i = 0; i < elements.length; i++) {
        var tags = elements[i].tagName;
        array.push(tags);
    }
    return array;
}
console.log(findTags(sampleClass3Childrens));