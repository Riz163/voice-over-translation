import {
  sitesInvidious,
  sitesPiped,
  sitesProxyTok,
} from "./alternativeUrls.js";

const sites = () => {
  return [
    {
      additionalData: "mobile",
      host: "youtube",
      url: "https://youtu.be/",
      match: /^m.youtube(-nocookie)?.com$/,
      selector: "shorts-video #player",
    },
    {
      additionalData: "mobile",
      host: "youtube",
      url: "https://youtu.be/",
      match: /^m.youtube(-nocookie)?.com$/,
      selector: ".player-container",
    },
    {
      host: "youtube",
      url: "https://youtu.be/",
      match: /^(www.)?youtube(-nocookie)?.com$/,
      selector: ".html5-video-container:not(#inline-player *)",
    },
    {
      host: "tiktok",
      url: "https://www.tiktok.com/",
      match: /^(www.)?tiktok.com$/,
      selector: null,
    },
    {
      host: "proxytok",
      url: "https://www.tiktok.com/",
      match: sitesProxyTok,
      selector: ".column.has-text-centered",
    },
    {
      additionalData: "mobile",
      host: "twitch",
      url: "https://twitch.tv/",
      match: /^m.twitch.tv$/,
      selector: "main > div > section > div > div > div",
    },
    {
      host: "twitch",
      url: "https://twitch.tv/",
      match: (url) =>
        url.host.includes("clips.twitch.tv") ||
        (url.host.includes("player.twitch.tv") &&
          url.searchParams.get("channel") === null) ||
        (url.host.includes("twitch.tv") &&
          (url.pathname.startsWith("/videos") ||
            url.pathname.startsWith("/embed") ||
            url.pathname.includes("/clip"))),
      selector: ".video-ref",
    },
    {
      host: "xvideos",
      url: "https://www.xvideos.com/",
      match: /^www.xvideos.com$/,
      selector: ".video-bg-pic",
    },
    {
      host: "pornhub",
      url: "https://rt.pornhub.com/view_video.php?viewkey=",
      match: /^[a-z]+.pornhub.com$/,
      selector: ".mainPlayerDiv > video-element > div",
    },
    {
      additionalData: "embed",
      host: "pornhub",
      url: "https://rt.pornhub.com/view_video.php?viewkey=",
      match: (url) =>
        url.host.includes("pornhub.com") && url.pathname.startsWith("/embed/"),
      selector: "#player",
    },
    {
      additionalData: "mobile",
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^m.vk.(com|ru)$/,
      selector: "vk-video-player",
      shadowRoot: true,
    },
    {
      host: "vk",
      url: "https://vk.com/video?z=",
      match: /^(www.|m.)?vk.(com|ru)$/,
      selector: ".videoplayer_media",
    },
    {
      // TODO: video selector: ".vp-video-wrapper > .vp-video > .vp-telecine > video"
      host: "vimeo",
      url: "https://vimeo.com/",
      match: /^(player.)?vimeo.com$/,
      selector: ".player",
    },
    {
      host: "nine_gag",
      url: "https://9gag.com/gag/",
      match: /^9gag.com$/,
      selector: ".video-post",
    },
    {
      host: "coub",
      url: "https://coub.com/view/",
      match: /^coub.com$/,
      selector: ".viewer__player",
    },
    {
      host: "bitchute",
      url: "https://www.bitchute.com/video/",
      match: /^(www.)?bitchute.com$/,
      selector: ".plyr__video-wrapper",
    },
    {
      host: "rutube",
      url: "https://rutube.ru/video/",
      match: /^rutube.ru$/,
      selector: ".video-player > div > div > div:nth-child(2)",
    },
    {
      additionalData: "embed",
      host: "rutube",
      url: "https://rutube.ru/video/",
      match: /^rutube.ru$/,
      selector: "#app > div > div",
    },
    {
      host: "bilibili",
      url: "https://www.bilibili.com/video/",
      match: /^(www|m|player).bilibili.com$/,
      selector: ".bpx-player-video-wrap",
    },
    {
      additionalData: "old", // /blackboard/webplayer/embed-old.html
      host: "bilibili",
      url: "https://www.bilibili.com/video/",
      match: /^(www|m).bilibili.com$/,
      selector: null,
    },
    {
      host: "twitter",
      url: "https://twitter.com/i/status/",
      match: /^twitter.com$/,
      selector: 'div[data-testid="videoComponent"] > div:nth-child(1) > div',
    },
    {
      host: "mail_ru",
      url: "https://my.mail.ru/",
      match: /^my.mail.ru$/,
      selector: "#b-video-wrapper",
    },
    {
      // ONLY IF YOU LOGINED TO COURSERA /learn/NAME/lecture/XXXX
      host: "coursera",
      url: "https://www.coursera.org/",
      match: /coursera.org$/,
      selector: "#video_player",
    },
    {
      // ONLY IF YOU LOGINED TO UDEMY /course/NAME/learn/lecture/XXXX
      host: "udemy",
      url: "https://www.udemy.com",
      match: /udemy.com$/,
      selector: ".vjs-v7",
    },
    {
      // Sites host Invidious. I tested the performance only on invidious.kevin.rocks, youtu.be and inv.vern.cc
      host: "invidious",
      url: "https://youtu.be/",
      match: sitesInvidious,
      selector: "#player",
    },
    {
      // Sites host Piped. I tested the performance only on piped.video
      host: "piped",
      url: "https://youtu.be/",
      match: sitesPiped,
      selector: ".shaka-video-container",
    },
    {
      // TODO: FIX RUMBLE DOUBLE BUTTON ON TRANSLATED VIDEO
      host: "rumble",
      url: "https://rumble.com",
      match: /^rumble.com$/,
      selector: ".videoPlayer-Rumble-cls > div",
    },
  ];
};

export default sites();
