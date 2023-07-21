function isValid(url) {
    let start = /^(http:\/\/|https:\/\/)([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
    let end = /\.(php|html)$/;
    return start.test(url) && end.test(url);
}
function url() {
    let url = document.getElementById("url").value;
    document.getElementById('reg_task1').innerHTML = "URL is " + (isValid(url) ? "valid" : "not valid");
}