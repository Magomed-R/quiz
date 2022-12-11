let answerNode = document.querySelector(`#answer`);
let checkNode = document.querySelector(`#check`);
let resultNode = document.querySelector(`#result`);
let attemptNode = document.querySelector(`#attempt`)
let wonNode = document.querySelector(`#won`)
let attempt = 3;

// кнопки с буквами
let a = document.querySelector(`#a`);
let b = document.querySelector(`#b`);
let c = document.querySelector(`#c`);
let d = document.querySelector(`#d`);
let e = document.querySelector(`#e`);
let f = document.querySelector(`#f`);
let g = document.querySelector(`#g`);
let h = document.querySelector(`#h`);
let i = document.querySelector(`#i`);
let j = document.querySelector(`#j`);
let k = document.querySelector(`#k`);
let l = document.querySelector(`#l`);
let m = document.querySelector(`#m`);
let n = document.querySelector(`#n`);
let o = document.querySelector(`#o`);
let p = document.querySelector(`#p`);
let q = document.querySelector(`#q`);
let r = document.querySelector(`#r`);
let s = document.querySelector(`#s`);
let t = document.querySelector(`#t`);
let u = document.querySelector(`#u`);
let v = document.querySelector(`#v`);
let w = document.querySelector(`#w`);
let x = document.querySelector(`#x`);
let y = document.querySelector(`#y`);
let z = document.querySelector(`#z`);


// Клик по кнопке проверить
checkNode.addEventListener(`click`, function () {});

// Клик по кнопкам с буквами
a.addEventListener(`click`, function () {
    answerNode.innerHTML += `a`;
    a.classList.add(`disabled`);
});
b.addEventListener(`click`, function () {
    answerNode.innerHTML += `b`;
    b.classList.add(`disabled`);
});
c.addEventListener(`click`, function () {
    answerNode.innerHTML += `c`;
    c.classList.add(`disabled`);
});
d.addEventListener(`click`, function () {
    answerNode.innerHTML += `d`;
    d.classList.add(`disabled`);
});
e.addEventListener(`click`, function () {
    answerNode.innerHTML += `e`;
    e.classList.add(`disabled`);
});
f.addEventListener(`click`, function () {
    answerNode.innerHTML += `f`;
    f.classList.add(`disabled`);
});
g.addEventListener(`click`, function () {
    answerNode.innerHTML += `g`;
    g.classList.add(`disabled`);
});
h.addEventListener(`click`, function () {
    answerNode.innerHTML += `h`;
    h.classList.add(`disabled`);
});
i.addEventListener(`click`, function () {
    answerNode.innerHTML += `i`;
    i.classList.add(`disabled`);
});
j.addEventListener(`click`, function () {
    answerNode.innerHTML += `j`;
    j.classList.add(`disabled`);
});
k.addEventListener(`click`, function () {
    answerNode.innerHTML += `k`;
    k.classList.add(`disabled`);
});
l.addEventListener(`click`, function () {
    answerNode.innerHTML += `l`;
    l.classList.add(`disabled`);
});
m.addEventListener(`click`, function () {
    answerNode.innerHTML += `m`;
    m.classList.add(`disabled`);
});
n.addEventListener(`click`, function () {
    answerNode.innerHTML += `n`;
    n.classList.add(`disabled`);
});
o.addEventListener(`click`, function () {
    answerNode.innerHTML += `o`;
    o.classList.add(`disabled`);
});
p.addEventListener(`click`, function () {
    answerNode.innerHTML += `p`;
    p.classList.add(`disabled`);
});
q.addEventListener(`click`, function () {
    answerNode.innerHTML += `q`;
    q.classList.add(`disabled`);
});
r.addEventListener(`click`, function () {
    answerNode.innerHTML += `r`;
    r.classList.add(`disabled`);
});
s.addEventListener(`click`, function () {
    answerNode.innerHTML += `s`;
    s.classList.add(`disabled`);
});
t.addEventListener(`click`, function () {
    answerNode.innerHTML += `t`;
    t.classList.add(`disabled`);
});
u.addEventListener(`click`, function () {
    answerNode.innerHTML += `u`;
    u.classList.add(`disabled`);
});
v.addEventListener(`click`, function () {
    answerNode.innerHTML += `v`;
    v.classList.add(`disabled`);
});
w.addEventListener(`click`, function () {
    answerNode.innerHTML += `w`;
    w.classList.add(`disabled`);
});
x.addEventListener(`click`, function () {
    answerNode.innerHTML += `x`;
    x.classList.add(`disabled`);
});
y.addEventListener(`click`, function () {
    answerNode.innerHTML += `y`;
    y.classList.add(`disabled`);
});
z.addEventListener(`click`, function () {
    answerNode.innerHTML += `z`;
    z.classList.add(`disabled`);
});

checkNode.addEventListener(`click`, function () {
    attempt--;
    if (answerNode.innerHTML == `dog`) {
        wonNode.innerHTML = `Поздравляю, вы победили!!1!`;
        attemptNode.innerHTML = ``;
        resultNode.classList.add(`you_win`)
        checkNode.classList.add(`disabled`);
        a.classList.add(`disabled`);
        b.classList.add(`disabled`);
        c.classList.add(`disabled`);
        d.classList.add(`disabled`);
        e.classList.add(`disabled`);
        f.classList.add(`disabled`);
        g.classList.add(`disabled`);
        h.classList.add(`disabled`);
        i.classList.add(`disabled`);
        j.classList.add(`disabled`);
        k.classList.add(`disabled`);
        l.classList.add(`disabled`);
        m.classList.add(`disabled`);
        n.classList.add(`disabled`);
        o.classList.add(`disabled`);
        p.classList.add(`disabled`);
        q.classList.add(`disabled`);
        r.classList.add(`disabled`);
        s.classList.add(`disabled`);
        t.classList.add(`disabled`);
        u.classList.add(`disabled`);
        v.classList.add(`disabled`);
        w.classList.add(`disabled`);
        x.classList.add(`disabled`);
        y.classList.add(`disabled`);
        z.classList.add(`disabled`);
    } else {
        attemptNode.innerHTML = `Ответ неверный. Осталось ` + attempt + ` попытки`;
        answerNode.innerHTML = ``;
        a.classList.remove(`disabled`);
        b.classList.remove(`disabled`);
        c.classList.remove(`disabled`);
        d.classList.remove(`disabled`);
        e.classList.remove(`disabled`);
        f.classList.remove(`disabled`);
        g.classList.remove(`disabled`);
        h.classList.remove(`disabled`);
        i.classList.remove(`disabled`);
        j.classList.remove(`disabled`);
        k.classList.remove(`disabled`);
        l.classList.remove(`disabled`);
        m.classList.remove(`disabled`);
        n.classList.remove(`disabled`);
        o.classList.remove(`disabled`);
        p.classList.remove(`disabled`);
        q.classList.remove(`disabled`);
        r.classList.remove(`disabled`);
        s.classList.remove(`disabled`);
        t.classList.remove(`disabled`);
        u.classList.remove(`disabled`);
        v.classList.remove(`disabled`);
        w.classList.remove(`disabled`);
        x.classList.remove(`disabled`);
        y.classList.remove(`disabled`);
        z.classList.remove(`disabled`);
    }
    if (attempt == 0) {
        attemptNode.innerHTML = `Вы проиграли!`;
        checkNode.classList.add(`disabled`);
        a.classList.add(`disabled`);
        b.classList.add(`disabled`);
        c.classList.add(`disabled`);
        d.classList.add(`disabled`);
        e.classList.add(`disabled`);
        f.classList.add(`disabled`);
        g.classList.add(`disabled`);
        h.classList.add(`disabled`);
        i.classList.add(`disabled`);
        j.classList.add(`disabled`);
        k.classList.add(`disabled`);
        l.classList.add(`disabled`);
        m.classList.add(`disabled`);
        n.classList.add(`disabled`);
        o.classList.add(`disabled`);
        p.classList.add(`disabled`);
        q.classList.add(`disabled`);
        r.classList.add(`disabled`);
        s.classList.add(`disabled`);
        t.classList.add(`disabled`);
        u.classList.add(`disabled`);
        v.classList.add(`disabled`);
        w.classList.add(`disabled`);
        x.classList.add(`disabled`);
        y.classList.add(`disabled`);
        z.classList.add(`disabled`);
    }
});