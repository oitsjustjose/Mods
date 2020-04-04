var lastSelectedElement = null;

$(document).ready(function () {
    $('.masthead').visibility({
        once: false,
        onBottomPassed: function () {
            $('.fixed.menu').transition('fade in');
        },
        onBottomPassedReverse: function () {
            $('.fixed.menu').transition('fade out');
        }
    });

    // Setup the dropdown in the menubar
    $('.ui.dropdown').dropdown({
        allowCategorySelection: true,
        action: 'nothing'
    });

    // Add a margin for the fixed menu if it's not a masthead page
    if (document.querySelector(".ui.large.inverted.teal.top.fixed.hidden.menu") == null) {
        document.body.style.marginTop += $(".ui.large.inverted.teal.top.fixed.menu").height() + "px";
    }

    init();
});

const init = () => {
    // Dark mode setup
    $(".ui.slider.checkbox").checkbox({
        onChecked: () => {
            window.localStorage.setItem("darkmode", 'yes');
            $(".ui").addClass("inverted");
            $("body").addClass("inverted");
            $(".ui.slider.checkbox").checkbox('set checked');
        },
        onUnchecked: () => {
            window.localStorage.setItem("darkmode", 'no');
            $(".ui").removeClass("inverted");
            $("body").removeClass("inverted");
            $(".ui.slider.checkbox").checkbox('set unchecked');
            // Do this to make sure that the masthead is inverted (i.e. all green)
            $("#menubar").addClass("inverted");
            $(".ui.vertical.masthead.center.aligned.segment").addClass("inverted");
        }
    });

    var mode = window.localStorage.getItem("darkmode");
    if (mode === undefined || mode === null) {
        window.localStorage.setItem("darkmode", 'no');
        mode = false;
    } else {
        if (mode === "yes") {
            $(".ui").addClass("inverted");
            $("body").addClass("inverted");
            $(".ui.slider.checkbox").checkbox('set checked');
        }
    }

    // Set up click event listeners for any ui cards on the screen
    document.querySelectorAll(".ui.card").forEach((card) => {
        $(card).click(() => {
            const target = "." + card.className.replace("card", "modal").replaceAll(" ", ".")
                .replace(".inverted", "");
            console.log(target);
            $(target).modal('show');
        });
    });

    $("body").show();
};

const toggleSidebar = () => {
    $('.ui.sidebar').sidebar('toggle');
};

const toggleVersion = (el, version) => {
    // Hide / Show the proper elements
    document.querySelectorAll(".extra.content").forEach((obj) => {
        $(obj.parentElement).show("slow");
    });
    if (lastSelectedElement == el) {
        // If they re-click the current filter, clear the filter
        $(lastSelectedElement).removeClass("active");
        lastSelectedElement = null;
        return;
    } else {
        $(el).addClass("active");
        $(lastSelectedElement).removeClass("active");
        lastSelectedElement = el;
        document.querySelectorAll(".extra.content").forEach((obj) => {
            if (!obj.innerHTML.includes(version)) {
                $(obj.parentElement).hide("slow");
            }
        });
    }
};

String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};