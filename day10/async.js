/*
window.setTimeout(() => {
    console.log("Iam settimeout");

},5000)

window.setInterval(()=> {
    console.log("Iam setinterval");

},3000);
*/

function main(m,n)
{
    setTimeout(() => {
        for(let i=m;i<n;i++)
        {
            console.log(i)
        }
    },5000)
main(1,"10a")
function demo()
{
    console.log("printed")
}
}