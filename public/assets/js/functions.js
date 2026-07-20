function scrollToAnchor(e) {
    var a = $("a[name='" + e + "']");
    $("html,body").animate({
        scrollTop: a.offset().top
    }, "slow")
}
$(".scroll-topft").click(function() {
    return $("html, body").animate({
        scrollTop: 0
    }, 600), !1
});
var str = location.href.toLowerCase();
$(".sub-nav li a").each(function() {
    str.indexOf(this.href.toLowerCase()) > -1 && ($("li.active").removeClass("active"), $(this).parent().addClass("active"))
}), $("li.sub-nav").parents().each(function() {
    $(this).is(".sub-nav li") && $(this).addClass("active")
}), $(".scroll-down").click(function() {
    scrollToAnchor("downz")
}),  document.URL.indexOf("/our-services/") >= 0 && $(".latest-work-bar").addClass("latest-work-bar-black");
var _ouibounce = ouibounce(document.getElementById("ouibounce-modal"), {
        aggressive: !0
    }),
    plugin_directions_image = "",
    plugin_directions = "",
    all_reasons_js = [{
        "id,": 1,
        menu_order: 1,
        title: {
            rendered: "We Take Pride In What We Create"
        },
        content: {
            rendered: "<p>We make sure every piece of creation that goes out of the door is something we’re happy to put our name to. The focus is on the quality rather than quantity we produce.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 2,
        menu_order: 2,
        title: {
            rendered: "Your Hard Work is Always Noticed"
        },
        content: {
            rendered: "<p>We work with some of the biggest brands in the world. Our projects can take time to implement but the results are seen by millions of people and have a significant impact our clients’ businesses.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 3,
        menu_order: 3,
        title: {
            rendered: "Manage Your Own Workload"
        },
        content: {
            rendered: "<p>You’re given the opportunity to be independent. It doesn’t suit everyone, but for people who appreciate responsibility, it’s liberating.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 4,
        menu_order: 4,
        title: {
            rendered: "Learn New Skills At Your Own Pace"
        },
        content: {
            rendered: "<p>We remain committed to employee development and encourage outside training courses.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 4,
        menu_order: 4,
        title: {
            rendered: "Be The Master Of Your Own Destiny"
        },
        content: {
            rendered: "<p>The structure is in place to support you to grow and make your mark within ABTACH Ltd. You get to be the one who decides which career path you’d like to walk.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 6,
        menu_order: 6,
        title: {
            rendered: "We Work In Extraordinary Spaces"
        },
        content: {
            rendered: "<p>The office environment is relaxed and enjoyable. We have beautifully designed offices in great locations in many parts of the world.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 7,
        menu_order: 7,
        title: {
            rendered: "Someone Always Has The Right Answer"
        },
        content: {
            rendered: "<p>The volume of collective in-house experience means that most situations have been met by a member of the team, who will be more than happy to share their knowledge and help you solve a problem.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 8,
        menu_order: 8,
        title: {
            rendered: "A Relationship That’s Built On Trust"
        },
        content: {
            rendered: "<p>Our focus is on producing remarkable work, not the exact time you check in and out. You’re trusted to manage your workload and to get done what needs to be done.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 9,
        menu_order: 9,
        title: {
            rendered: "We Don’t Have Meetings About Meetings"
        },
        content: {
            rendered: "<p>You are free to speak to your colleagues as and when needed rather than in designated slots.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 10,
        menu_order: 10,
        title: {
            rendered: "Your Holidays Are For You To Enjoy"
        },
        content: {
            rendered: "<p>We all need a break, every once in a while and as we have flexible working, you don’t unnecessarily use up days running errands.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 11,
        menu_order: 11,
        title: {
            rendered: "We Think Big And Act Fast"
        },
        content: {
            rendered: "<p>At ABTACH Ltd. we share a common vision for the company and we are never too scared to think big. And once we are on the go, we move quickly.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 12,
        menu_order: 12,
        title: {
            rendered: "You Get To Experience The World"
        },
        content: {
            rendered: "<p>We work with companies across every international market and arrange trips for team members to meet their clients, taking in a few sights and local flavors while they’re there..</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 13,
        menu_order: 13,
        title: {
            rendered: "Your Ideas Are Welcomed"
        },
        content: {
            rendered: "<p>Everyone is encouraged to offer input to improve the way things work. Suggestions come from all areas of the company and if you want to create something, the support is there to make it happen.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 14,
        menu_order: 14,
        title: {
            rendered: "We Develop Our Own Tools"
        },
        content: {
            rendered: "<p>Having relied on 3rd party data and software previously, it’s refreshing to have access to in-house tools that are constantly invested in and improved.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 15,
        menu_order: 15,
        title: {
            rendered: "Experiences Matter To Us"
        },
        content: {
            rendered: "<p>We values knowledge and experience above most things. Every member of our team can be relied upon to really know their stuff, technical and otherwise.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 16,
        menu_order: 16,
        title: {
            rendered: "Our Clients Value Our Opinion"
        },
        content: {
            rendered: "<p>Our clients are confident we know what we’re talking about, which allows to us get involved in the big decisions that will affect their business.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 17,
        menu_order: 17,
        title: {
            rendered: "You’ll Feel Welcome From Day One"
        },
        content: {
            rendered: "<p>The team atmosphere is very friendly but with a healthy competitiveness. If you need help with a project, there is always someone there to support you.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 18,
        menu_order: 18,
        title: {
            rendered: "We Understand You Have A Life Outside Work"
        },
        content: {
            rendered: "<p>The relaxed working environment enables to work around childcare needs, which aren’t always easy to predict. We all put in the effort and get lots of flexibility in return.</p>\n"
        },
        abtach_reason_featured_image: "../assets/images/career-ban1.jpg"
    }, {
        id: 19,
        menu_order: 19,
        title: {
            rendered: "You Get To Work With The Best"
        },
        content: {
            rendered: "<p>You are surrounded by people who are established and respected figures in the IT industry. Learning first hand every day from their vast experience is far more valuable than any training course.</p>\n"
        },
        abtach_reasons_quote_staff_relation: {
            name: "Michael Carden-Edwards",
            office_location: "Pakistan",
            job_title: "SEO Director"
        },
        abtach_reason_featured_image: "../assets/images/graphics-design-banner.jpg"
    }],
    splash_image = "../assets/images/career-ban1.jpg",
    section_slug = "join-us";
$(document).ready(function() {
    function e(e) {
        for (var a = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
            for (var o = t[n];
                " " == o.charAt(0);) o = o.substring(1);
            if (0 == o.indexOf(a)) return o.substring(a.length, o.length)
        }
        return ""
    }

    function a(e) {
        document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    }

    function t() {
        var e = new Array;
        for (i = 0; i < all_reasons_js.length; i++) e[i] = new Image, null != all_reasons_js[i].abtach_reason_featured_image && (e[i].src = all_reasons_js[i].abtach_reason_featured_image)
    }

    function n(e, a, t) {
        var n = $('<div class="pretransition" style="background-image: url(' + a + ')">');
        e.append(n), n[0].clientHeight, n.addClass("transitioning"), setTimeout(function() {
            e.css("background-image", "url(" + a + ")"), n.remove()
        }, t), $("#abtach-careers-header, #jobs_list_menu, #panel-bottom, #panel-bottom, section.article-content.generic-content.ayc_centered").removeClass("ayc-right-position")
    }

    function o(e) {
        var a = e.abtach_reason_featured_image || plugin_directions_image,
            t = e.abtach_reasons_quote_staff_relation;
        $("#reason-reason-number").children("span").html("Reason #" + e.menu_order), $("#reason-title").html(e.title.rendered), $("#reason-content").html(e.content.rendered), $("#reason-author").html(t.name ? '<span class="quote_staff">' + t.name + "</span>, " + t.job_title + ", " + t.office_location : ""), n($("#abtach-careers-header"), a, 1e3)
    }

    function s() {
        return "ontouchstart" in window || navigator.maxTouchPoints
    }

    function r(e) {
        $("#panel-bottom").fadeTo("fast", 0, "linear", function() {
            $("#jobs_list_menu").css("background-color", "rgba(255, 255, 255, 1)"), $("#panel-bottom").css("z-index", "-1"), $(".jobs-bottom").css("z-index", "1"), $(".jobs-bottom").fadeTo("fast", 1, "linear", function() {
                $("#jobs_list_menu").animate({
                    bottom: Math.min(-e, 0) + "px"
                }, 700, function() {
                    $(".filter-close a").children("img").removeClass("rotated-ccw").addClass("rotated-cw"), $("#jobs_list_menu").removeClass("hideScroll "), $("#jobs_list_menu").addClass("In")
                })
            })
        })
    }

    function l(e) {
        $("#jobs_list_menu").removeClass("In"), $(".filter-close a").children("img").addClass("rotated-ccw").removeClass("rotated-cw"), $("#jobs_list_menu").addClass("hideScroll "), $("#jobs_list_menu").animate({
            bottom: "-" + e + "px"
        }, 700, function() {
            $("#panel-bottom").css("z-index", "1"), $(".jobs-bottom").css("z-index", "-1"), $(".jobs-bottom").fadeTo("fast", 0, "linear", function() {
                $("#jobs_list_menu").css("background-color", "rgba(255, 255, 255, .7)"), $("#panel-bottom").fadeTo("fast", 1, "linear", function() {
                    $(".ayc_location-filter").removeClass("active-filter"), $('.ayc_location-filter[data-location-filter="All"]').addClass("active-filter"), $(".jobs-filtered-list .job-item").show()
                })
            })
        })
    }


    if (document.cookie) {
        var d = e("reason_id_target"),
            h = document.referrer,
            u = h.indexOf("/" + section_slug + "/job-");
        if (u > -1)
            if (parseInt(d)) {
                $(".nav-left").removeClass("hide").fadeTo("fast", 1), $(".all-reasons-btn").removeClass("hide").fadeTo("fast", 1), $(".nav-right").removeClass("hide-mobile"), $("a.next_abtach_reason.splash_page").remove();
                var m = all_reasons_js.filter(function(e) {
                    return e.id == parseInt(d)
                });
                "undefined" == typeof reason_counter ? reason_counter = 0 : reason_counter == all_reasons_js.length - 1 ? reason_counter = 0 : reason_counter++, o(m[0]), a("reason_id_target")
            } else splash_image && $("#abtach-careers-header").css({
                "background-image": "url(" + splash_image + ")",
                opacity: "0"
            }).fadeTo("slow", 1), $("#reason-title").html('<span class="pre-main-front">There are <span class="total-reasons">' + all_reasons_js.length + "</span> excellent reasons to join abtach</span>"), $("#reason-title").after('<a href="#" class="button cta white next_abtach_reason splash_page">Take a Look</a>');
        else $("#content").children(".content-wrapper").hasClass("single-job-page") || (splash_image && $("#abtach-careers-header").css({
            "background-image": "url(" + splash_image + ")",
            opacity: "0"
        }).fadeTo("slow", 1), $("#reason-title").html('<span class="pre-main-front">There are <span class="total-reasons">' + all_reasons_js.length + "</span> excellent reasons to join abtach</span>"), $("#reason-title").after('<a href="#" class="button cta white next_abtach_reason splash_page">Take a Look</a>'))
    } else splash_image && $("#abtach-careers-header").css({
        "background-image": "url(" + splash_image + ")",
        opacity: "0"
    }).fadeTo("slow", 1), $("#reason-title").html('<span class="pre-main-front">There are <span class="total-reasons">' + all_reasons_js.length + "</span> excellent reasons to join abtach</span>"), $("#reason-title").after('<a href="#" class="button cta white next_abtach_reason splash_page">Take a Look</a>');
    if ($(document).on("click", ".ayc_location-filter", function(e) {
            e.preventDefault();
            var a = $(".jobs-bottom").height();
            $(".jobs-bottom").css("height", a), $(".ayc_location-filter").removeClass("active-filter");
            var t = $(this).data("location-filter");
            "All" !== t ? $(".job-item").each(function() {
                $(this).data("location") === t || "all" === $(this).data("location") ? $(this).removeClass("job-hidden").show() : $(this).hasClass("job-hidden") || $(this).hide()
            }) : (c("All"), $(".job-item").removeClass("job-hidden"), $(".job-item").each(function(e) {
                $(this).show()
            })), $(this).addClass("active-filter")
        }), t(), $(document).on("click", ".next_abtach_reason", function(e) {
            e.preventDefault(), $(this).hasClass("splash_page") && ($(".nav-left,.nav-right,.all-reasons-btn").removeClass("hide hide-mobile").fadeTo("fast", 1), $(".splash_page").remove()), $(".splash_page").length && ($(".splash_page").fadeTo("slow", 0).remove(), $(".nav-left,.nav-right,.all-reasons-btn").removeClass("hide hide-mobile").fadeTo("fast", 1)), "undefined" == typeof reason_counter ? reason_counter = 0 : reason_counter = (reason_counter + 1) % all_reasons_js.length, o(all_reasons_js[reason_counter])
        }), $(document).on("click", ".previous_abtach_reason", function(e) {
            e.preventDefault(), reason_counter = (reason_counter - 1 + all_reasons_js.length) % all_reasons_js.length, o(all_reasons_js[reason_counter])
        }), s() || $("a.show").hover(function() {
            $(".show").children(".locations").children(".ayc-circle-badge").html('<img class="hover-up" src="' + plugin_directions + 'img/careers-arrow-up.png" alt="up" />'), $(".show").children(".positions").children(".ayc-circle-badge").html('<img class="hover-up" src="' + plugin_directions + 'img/careers-arrow-up.png" alt="up" />'), $(".hover-up").fadeTo("fast", 1)
        }, function() {
            $(".hover-up").fadeTo("fast", 0, "linear", function() {
                $(".show").children(".locations").children(".ayc-circle-badge").html(location_no), $(".show").children(".positions").children(".ayc-circle-badge").html(positions_no)
            })
        }), $(document).on("click", ".filter-close a, .show", function(e) {
            e.preventDefault();
            var a = $("#jobs_list_menu").height(),
                t = $(".jobs-bottom").height(),
                n = $("#panel-bottom").height();
            $(".jobs-bottom").css("top", "-" + n + "px"), $("#jobs_list_menu").hasClass("In") ? l(a - n) : r(a - t)
        }), $("a.all-reasons-btn").on("click", function(e) {
            e.preventDefault(), $("#jobs_list_menu").is(":visible"), $("#abtach-careers-all-reasons").is(":visible"), $("#abtach-careers-all-reasons").hasClass("slide-in") ? ($("#abtach-careers-all-reasons").addClass("slide-out").removeClass("slide-in"), $(".nav-right").addClass("slide-out").removeClass("slide-in"), $(".all-reasons-btn").addClass("slide-out").removeClass("slide-in"), $(".all-reasons-btn").children("img.top").css("opacity", "1").show(), $(".all-reasons-btn").children("img.bottom").css("opacity", "0").hide(), $(".article-content.generic-content.ayc_centered").removeClass("less")) : ($("#abtach-careers-all-reasons").addClass("slide-in").removeClass("slide-out"), $(".nav-right").addClass("slide-in").removeClass("slide-out"), $(".all-reasons-btn").addClass("slide-in").removeClass("slide-out"), $(".all-reasons-btn").children("img.top").hide(), $(".all-reasons-btn").children("img.bottom").css("opacity", "1").show(), $(".article-content.generic-content.ayc_centered").addClass("less"))
        }), $(document).on("click", ".close-all-reasons a", function(e) {
            e.preventDefault(), $("#abtach-careers-all-reasons").slideToggle()
        }), $(document).on("click", ".more-jobs-btn button", function(e) {
            e.preventDefault(), $(".jobs-filtered-list").children(".job-item").each(function() {
                var e = $(".ayc_location-filter.active-filter").data("location-filter");
                $(this).hasClass("job-hidden") ? "All" != e ? $(this).data("location") == e && ($(this).show("slow", "linear"), $(this).removeClass("job-hidden")) : ($(this).show("slow", "linear"), $(this).removeClass("job-hidden")) : "All" != e ? $(this).data("location") == e && ($(this).hide("slow", "linear"), $(this).addClass("job-hidden")) : ($(this).hide("slow", "linear"), $(this).addClass("job-hidden"))
            })
        }), $(document).on("click", ".view-all-vacancies", function(e) {
            e.preventDefault(), $(this).closest(".current-vacancies").find(".job-hidden").slideDown("slow", "linear", function() {
                $(this).closest(".current-vacancies").find(".view-more-btn").remove()
            })
        }), $(document).on("click", ".new-abtach-careers-wrapper figure", function(e) {
            e.preventDefault();
            var a = $(this).data("reason-id"),
                t = all_reasons_js.filter(function(e) {
                    return e.id == a
                });
            o(t[0])
        }), $(document).on("click", "#abtach-careers-all-reasons-single-page figure", function(e) {
            e.preventDefault();
            var a = $(this).data("reason-id");
            all_reasons_js.filter(function(e) {
                return e.id == a
            });
            document.cookie = "reason_id_target=" + a + ";path=/";
            var t = $(this).find("a").prop("href");
            document.location.href = t
        }), window.onload = function() {
            $(".content-wrapper").hasClass("single-job-page") ? $("html").css("overflow-y", "auto") : (location_no = $(".show").children(".locations").children(".ayc-circle-badge").text(), positions_no = $(".show").children(".positions").children(".ayc-circle-badge").text());
            var e = $(window).height();
            maxHeight = Math.ceil(e / 4 * 3);
            var a = $("#jobs_list_menu").height() - $("#panel-bottom").height();
            $("#jobs_list_menu").css("bottom", "-" + a + "px");
            var t = $("html").width();
            if (320 >= t && $(".article-content.generic-content.ayc_centered").css("width", t - 90 + "px"), $("#header").children("div").hasClass("ayc-single-job")) {
                var n = $("#header").height();
                n += 30, $(".ayc-single-job").css("height", n + "px")
            }
        }, $(window).on("resize", function() {
            var e = $("#jobs_list_menu").height() - $("#panel-bottom").height();
            $("#jobs_list_menu").css("bottom", "-" + e + "px");
            var a = $("html").width();
            if ($(".article-content.generic-content.ayc_centered").css("width", 320 >= a ? a - 90 + "px" : ""), $("#header").children("div").hasClass("ayc-single-job")) {
                var t = $("#header").height();
                t += 30
            }
            $("#jobs_list_menu").hasClass("In") && (sizedown = $("#jobs_list_menu").height() - $("#panel-bottom").height(), l(sizedown))
        }), setTimeout(function() {
            $(".animate").bind("inview", function(e, a) {
                if (a) {
                    var t = $(this).attr("data-animation"),
                        n = $(this).attr("data-duration"),
                        o = $(this);
                    setTimeout(function() {
                        o.addClass(t + " animated")
                    }, n)
                }
            })
        }, 3200), $(window).width() > 200 && $(".menu-open").on("click", function() {
            $(".menu-bar").toggleClass("open")
        }), $(window).width() < 200 && $(".menu-open").on("click", function() {
            $("html").toggleClass("html-open")
        }), $("#nav-icon3").click(function() {
            $(this).toggleClass("click")
        }), $(window).width() > 200) {
        $(window).height();
        $(".sub-nav > ul > li").hover(function() {
            $(this).find(".first-menu").stop().slideToggle("slow")
        })
    }
    $(window).width() <= 200 && $(".second-menu").on("click", function() {
        $(this).next().toggleClass("active"), $(".first-menu").slideToggle("slow")
    }), $(".close-popup").click("on", function() {
        setTimeout(function() {
            $(".close").trigger("click")
        }, 5e3)
    }), $(".ft-listing li").each(function() {
        if (isURL($(this).find("a").attr("href"))) {
            var e = $(this).find("a").attr("href");
            $(".ft-listing a[href='" + e + "']").parent("li").addClass("active")
        }
    }), $("[data-fancybox]").fancybox(), $(".contactusform").validate(), $(".contactusform-footer").validate(), $('.portfolio-content [data-fancybox="video"], .testimonail-thumb [data-fancybox="video"]').fancybox({
        afterLoad: function(e, a) {
            a.$content.css({
                overflow: "visible",
                background: "#000"
            })
        },
        onUpdate: function(e, a) {
            var t, n, o = 16 / 9,
                s = a.$content;
            s && (s.hide(), t = a.$slide.width(), n = a.$slide.height() - 100, n * o > t ? n = t / o : t = n * o, s.css({
                width: t,
                height: n
            }).show())
        }
    }), $("#testimoanial-slider").bxSlider({
        mode: "vertical",
        responsive: !0,
        auto: !1,
        pager: !1,
        controls: !0,
        startSlide: 0,
        minSlides: 2,
        moveSlides: 1,
        touchEnabled: !0,
        wrapperClass: "testimonail-wrapper"
    }), $(".navbr").midnight(), $("#sticky-header").affix({
        offset: {
            top: 600
        }
    }), $("li:first-child").addClass("first"), $("li:last-child").addClass("last"), $("tr:nth-child(odd)").addClass("alter"), $('[href="#"]').attr("href", "javascript:;"), $("section.footer_form ul li, .popupform ul li").focusin(function() {
        $(this).addClass("focus")
    }), $("section.footer_form ul li, .popupform ul li").focusout(function() {
        $(this).removeClass("focus")
    }), $(".navigation li, ul.nav.navbar-nav li").hover(function() {
        $(this).children(".submenu").slideDown(200)
    }, function() {
        $(this).children(".submenu").slideUp(200)
    }), $(document).on("click touchstart", ".nav", function() {
        $("body").toggleClass("show-sidebar"), $(".nav .fa").toggleClass("fa-navicon fa-times"), $(".body-overlay").toggleClass("body-overlay-apply")
    }), $(document).on("click touchstart", ".body-overlay-apply", function() {
        $("body").toggleClass("show-sidebar"), $(".nav .fa").toggleClass("fa-navicon fa-times"), $(".body-overlay").toggleClass("body-overlay-apply")
    })
}), $(window).on("load", function() {
    $(".menu-open").on("click", function() {
        setTimeout(function() {
            $(".fadeUp1").toggleClass("animated fadeInUp")
        }, 400), setTimeout(function() {
            $(".fadeUp2").toggleClass("animated fadeInUp")
        }, 500), setTimeout(function() {
            $(".fadeUp3").toggleClass("animated fadeInUp")
        }, 600), setTimeout(function() {
            $(".fadeUp4").toggleClass("animated fadeInUp")
        }, 700), setTimeout(function() {
            $(".fadeUp5").toggleClass("animated fadeInUp")
        }, 800), setTimeout(function() {
            $(".fadeUp6").toggleClass("animated fadeInUp")
        }, 900), setTimeout(function() {
            $(".fadeUp7").toggleClass("animated fadeInUp")
        }, 1e3), setTimeout(function() {
            $(".fadeUp8").toggleClass("animated fadeInUp")
        }, 1100)
    })
});