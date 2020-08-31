function showSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
}

function hideSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
}

function showSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
}

function hideSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
}

function addComment() {
    console.log("Inside add comment");
    var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function () {
        document.getElementById("txtCommentCommentPost").innerHTML;
    });

    var x = document.getElementById("txtCommentCommentPost").value;
    console.log(x);
    var pElement = '<p >' + x + '</p>';
    var getDiv = document.getElementById('listAllComments');
    getDiv.innerHTML = pElement + getDiv.innerHTML;
}

function incrementCounter() {
    var cntr = document.getElementById('counterLikedBy');
    var val = parseInt(cntr.innerText);
    cntr.innerText = val + 1;

}