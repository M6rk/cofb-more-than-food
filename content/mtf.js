<script>
    // hide the wp title that appears on page load
    document.addEventListener("DOMContentLoaded", function () {
        var title = document.querySelector("h1.entry-title");
        if (title) {
            title.style.display = "none";
        }
    });
</script>
