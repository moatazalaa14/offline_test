const cacheName="MHRSD - offline (Test)"


const assets = [
  "/analytics-frame.html",
  "/manifest.json",
  "/meta.xml",
  "/index.html",
  "/sw.js",
  
  "/html5/data/css/output.min.css",
  
  "/html5/data/js/5ephAAbIeui.js",
  "/html5/data/js/5jA1MdiDxE9.js",
  "/html5/data/js/5wKeXl8Gy6M.js",
  "/html5/data/js/64z122UqPnm.js",
  "/html5/data/js/6dOp3KK8C74.js",
  "/html5/data/js/6mJLdjX73ac.js",
  "/html5/data/js/6POqPWyKYg5.js",
  "/html5/data/js/6XlKwHa4Jow.js",
  "/html5/data/js/6ZTYYfAWWXH.js",
  "/html5/data/js/data.js",
  "/html5/data/js/frame.js",
  "/html5/data/js/paths.js",
  
  "/html5/lib/scripts/bootstrapper.min.js",
  "/html5/lib/scripts/frame.desktop.min.js",
  "/html5/lib/scripts/frame.mobile.min.js",
  "/html5/lib/scripts/slides.min.js",
  
  "/html5/lib/stylesheets/desktop.min.css",
  "/html5/lib/stylesheets/mobile.min.css",
  "/html5/lib/stylesheets/mobile-fonts/open-sans-bold.woff",
  "/html5/lib/stylesheets/mobile-fonts/open-sans-light.woff",
  "/html5/lib/stylesheets/mobile-fonts/open-sans-regular.woff",
  
  "/images/Picture1.png",
  "/images/online-course.png",
  "/images/online-course (1).png",
  "/images/online-course (2).png",
  
  "/mobile/5aENhMaRBUY.png",
  "/mobile/5aOn4Ae4ewd.png",
  "/mobile/5aRI35qClUy.png",
  "/mobile/5bNfQVILbM2.png",
  "/mobile/5bxBcBavCy5.png",
  "/mobile/5c4HKHVexeu.png",
  "/mobile/5cetw7pr6FL.png",
  "/mobile/5ckkL8JzF9L_P_0_392_182_248.png",
  "/mobile/5ckkL8JzF9L_P_282_0_212_204.png",
  "/mobile/5ckkL8JzF9L_P_51_164_203_206.png",
  "/mobile/5ckkL8JzF9L_P_530_157_194_212.png",
  "/mobile/5ckkL8JzF9L_P_582_392_194_248.png",
  "/mobile/5d1kqrcNZsM.png",
  "/mobile/5dI4IuDEKO5.png",
  "/mobile/5dIkhajTKhG.png",
  "/mobile/5efLe0UWr4G.png",
  "/mobile/5efWYo7QrQa_P_0_0_384_753.png",
  "/mobile/5eZyZwPqS54.png",
  "/mobile/5fNckcSgir4.png",
  "/mobile/5fqX47fEwiY.png",
  "/mobile/5fTInzjUJMk.png",
  "/mobile/5gL5C6mQMcd.png",
  "/mobile/5gN3EMEeQ4J.png",
  "/mobile/5gS5fSyUBfA.png",
  "/mobile/5gT1RgI0SC7.png",
  "/mobile/5gUK91iWu8P.png",
  "/mobile/5gwEXrpbFK7_P_0_0_280_72.png",
  "/mobile/5gwEXrpbFK7_P_0_196_280_97.png",
  "/mobile/5gwEXrpbFK7_P_0_287_280_93.png",
  "/mobile/5gwEXrpbFK7_P_0_93_280_90.png",
  "/mobile/5i3rLCreduZ.png",
  "/mobile/5i6nCLO1kQh.png",
  "/mobile/5iBV6qOQjxb.png",
  "/mobile/5iCH0fzB6xr_P_0_0_334_763.png",
  "/mobile/5iJxJrEgtxU.png",
  "/mobile/5jAvg8yA2e1.png",
  "/mobile/5jAvg8yA2e1_RG.png",
  "/mobile/5jPv14VQQu8.png",
  "/mobile/5kfZz3QnKRg_P_0_0_648_154.png",
  "/mobile/5kfZz3QnKRg_P_0_162_648_262.png",
  "/mobile/5kJdYEXbEFW.png",
  "/mobile/5kumRkeahm0.png",
  "/mobile/5kzl8jklF62.png",
  "/mobile/5lNQVKLwehU_P_0_0_608_267.png",
  "/mobile/5lYTMTtgJtF.png",
  "/mobile/5mIS5l6avp0.png",
  "/mobile/5mttT8UBsbv.png",
  "/mobile/5mttT8UBsbv_P_0_0_491_748.png",
  "/mobile/5mWoh69auCH.png",
  "/mobile/5mxWKLEmJ1C.png",
  "/mobile/5nhNJDBD67R_P_0_0_485_213.png",
  "/mobile/5njZxQhzxUI_X.png",
  "/mobile/5oLREmhBhC3.png",
  "/mobile/5oo3pa6ORF6.png",
  "/mobile/5oooNrg1uBA.png",
  "/mobile/5oxwvGp1dFT.png",
  "/mobile/5pAw0fiFqH9.png",
  "/mobile/5pjcQI2iOkz.png",
  "/mobile/5pq0wxMhCPC.png",
  "/mobile/5pw3rUFPR12.png",
  "/mobile/5qgFf69f41G_P_0_0_607_321.png",
  "/mobile/5rkOSw6EcN5.png",
  "/mobile/5rnaNLX9i4B.png",
  "/mobile/5sG2Ik393kS.png",
  "/mobile/5sKtebjQnnu.png",
  "/mobile/5snyD0RObcj.png",
  "/mobile/5sSyE4AOg7I.png",
  "/mobile/5t6ObbnBSRz.png",
  "/mobile/5tJ7HOZDagF.png",
  "/mobile/5tNV2yLoJDW.png",
  "/mobile/5u1TA7me34W.png",
  "/mobile/5uD2xcvdswL.png",
  "/mobile/5UmlkqyP1Ih.png",
  "/mobile/5uP3u1J4wbb_P_0_0_554_206.png",
  "/mobile/5uUcjDNrWvW.png",
  "/mobile/5uVcA5A6CCb.png",
  "/mobile/5v68N9xoeUj.png",
  "/mobile/5VkZvUrHBzc.png",
  "/mobile/5vl7IGDpF21.png",
  "/mobile/5vqaW0j7qkF.png",
  "/mobile/5VwMdeg8PuB.png",
  "/mobile/5VyZqCZef9J.png",
  "/mobile/5W89T1PQJ3y_P_0_0_548_103.png",
  "/mobile/5wNGJHzVlqd.png",
  "/mobile/5WvDinvt89x_P_0_0_386_784.png",
  "/mobile/5X1DSdIOCXt.png",
  "/mobile/5xGr3GNI61e.png",
  "/mobile/5XN6PzUJIh5_P_0_0_356_103.png",
  "/mobile/5XN6PzUJIh5_P_0_118_356_89.png",
  "/mobile/5XN6PzUJIh5_P_0_218_356_91.png",
  "/mobile/5XN6PzUJIh5_P_0_309_356_94.png",
  "/mobile/5XN6PzUJIh5_P_0_415_356_71.png",
  "/mobile/5XyrOLAWrKw.png",
  "/mobile/5y4jW4wafvW.png",
  "/mobile/5y4tRY1bvgP.png",
  "/mobile/5yaiuaIEGjk.png",
  "/mobile/5YodiGSQFzT.png",
  "/mobile/5Z5xNyPJN05.png",
  "/mobile/5Z5xNyPJN05_X.png",
  "/mobile/5Z7HvbseySx.png",
  "/mobile/5z9SMwJotcT.png",
  "/mobile/5zG3egknyKm.png",
  "/mobile/5zjRmEXefPT.png",
  "/mobile/60IBXjP1D2J.png",
  "/mobile/60ilcXqhwJg.png",
  "/mobile/60vyKYLFGs4.png",
  "/mobile/61KltTTC1UB.png",
  "/mobile/61XT0T7bgT3.png",
  "/mobile/620Z9Hzg4hZ.png",
  "/mobile/628pQuSHA6z.png",
  "/mobile/62fyKujm7DD.png",
  "/mobile/62hUm0MM6Lk.png",
  "/mobile/62sv5B8SP2h.png",
  "/mobile/62yXNIwpv9y.png",
  "/mobile/63P0ExcqA4p.png",
  "/mobile/63wAxR666nS.png",
  "/mobile/64tgkIPnsX9.png",
  "/mobile/65bKrAr13cX.png",
  "/mobile/65p9XxcMLJQ_P_0_0_607_161.png",
  "/mobile/66MhOV1AaEZ.png",
  "/mobile/66U4et0aPxv.png",
  "/mobile/672355jAmZq.png",
  "/mobile/672cx3U0CoO.png",
  "/mobile/67Wp7qbAs26.png",
  "/mobile/682yf7fsSti.png",
  "/mobile/684FE2YOyNv.png",
  "/mobile/68Yn1egTrQO.png",
  "/mobile/698pzeFZHAP.png",
  "/mobile/69acbKyFtgY_P_0_0_556_266.png",
  "/mobile/69c9eeGqdZ7.png",
  "/mobile/69wWS5V1UBQ.png",
  "/mobile/6A6XChRfElV.png",
  "/mobile/6aGAYt9M33V.png",
  "/mobile/6aLvSG2Pvs7.png",
  "/mobile/6aNgwbw83la.png",
  "/mobile/6aSTEeY1DQh.png",
  "/mobile/6Azg0Yr5spV.png",
  "/mobile/6BXYh0PzQ3p.png",
  "/mobile/6C4FlpAswJy.png",
  "/mobile/6ccnyZN1QSm_P_0_0_607_54.png",
  "/mobile/6cgCIuU4cJ5.png",
  "/mobile/6CheEw0YaXz.png",
  "/mobile/6CheEw0YaXz_RG.png",
  "/mobile/6CI381GdQcj.png",
  "/mobile/6cJE31AoJLJ.png",
  "/mobile/6D6ocXpY3O6.png",
  "/mobile/6d9ro3UDb7s.png",
  "/mobile/6D9VrSLwoo4_P_0_0_485_158.png",
  "/mobile/6degWZUBiO6.png",
  "/mobile/6dep89OnQOd.png",
  "/mobile/6dfhkHc2cJU.png",
  "/mobile/6eBS48hhSPS.png",
  "/mobile/6EhCJr2gsqY.png",
  "/mobile/6eiuhXLdrhy.png",
  "/mobile/6eUMwtgLpaf.png",
  "/mobile/6eXQjWN4j5g.png",
  "/mobile/6EZWWaZljaa.png",
  "/mobile/6FdG5GgN9uc.png",
  "/mobile/6FkfIkwpX4m.png",
  "/mobile/6fmWvdJIHoY.png",
  "/mobile/6fNxFETnLxF.png",
  "/mobile/6fqtPlddZ64.png",
  "/mobile/6Ftm3upV4tW.png",
  "/mobile/6G7R1ZOjZrI.png",
  "/mobile/6GcauoPQRJX.png",
  "/mobile/6gTgxNofvrJ.png",
  "/mobile/6gZdPnbPq4o.png",
  "/mobile/6H7QrSBzeo3_P_0_0_506_317.png",
  "/mobile/6H8XdBXNBmo.png",
  "/mobile/6HAK1utxkTm.png",
  "/mobile/6HBwyWfzR9p.png",
  "/mobile/6hK4p6K4Fm4.png",
  "/mobile/6HKOrzWaQrJ.png",
  "/mobile/6HMQxHz1KSS.png",
  "/mobile/6hOa6o7mnmi.png",
  "/mobile/6HozR20UuTk.png",
  "/mobile/6HRst7gNSAq.png",
  "/mobile/6i9484bMj01.png",
  "/mobile/6iadXlg1kxB.png",
  "/mobile/6iGl1Yj1nNr.png",
  "/mobile/6ImrFVB5zEA.png",
  "/mobile/6iQEV240D25_P_0_0_775_817.png",
  "/mobile/6J2SwkiWmX7.png",
  "/mobile/6j7e8uEHEpS.png",
  "/mobile/6JFUzSXFgOL.png",
  "/mobile/6jpQwhNIcEp_P_0_0_489_110.png",
  "/mobile/6JpvKmWsm5d.png",
  "/mobile/6jsmW8bemPp.png",
  "/mobile/6JU8dG4nuLR.png",
  "/mobile/6jVNzpzWkzh.png",
  "/mobile/6jvZy6KIbfj.png",
  "/mobile/6k6n04ZhE63.png",
  "/mobile/6KEDon18e3w.png",
  "/mobile/6L7KY2O9a1Q.png",
  "/mobile/6ldG0vtGRdF.png",
  "/mobile/6lM14XILZK0.png",
  "/mobile/6LzClZg8ABC.png",
  "/mobile/6mPINqwejGU.png",
  "/mobile/6mqbnTbrYf3.png",
  "/mobile/6MQWPrscZf0.png",
  "/mobile/6n24kxFF214.png",
  "/mobile/6nhAlikL8ye.png",
  "/mobile/6nKazrthPbv.png",
  "/mobile/6NXPkDOZdMN.png",
  "/mobile/6O9vAdiDSJt.png",
  "/mobile/6owHTJXntLM.png",
  "/mobile/6p8GhG99LAT.png",
  "/mobile/6PbeZzoY4iQ.png",
  "/mobile/6PdgjRmBzi5.png",
  "/mobile/6pMcsEbiimj.png",
  "/mobile/6pvOra0DoJY.png",
  "/mobile/6Q0fw2UKQgl_P_0_0_592_588.png",
  "/mobile/6Q31tIAtiAg.png",
  "/mobile/6QaXftzUbEt.png",
  "/mobile/6qcnS9tyoz7.png",
  "/mobile/6QgovyvpSZL.png",
  "/mobile/6QRqAVXV3mT.png",
  "/mobile/6QrXk3MxP42.png",
  "/mobile/6QtEiUWWgoB.png",
  "/mobile/6qYGUbAh6oK.png",
  "/mobile/6qYt6hPZYlY.png",
  "/mobile/6Rqvz9935rl.png",
  "/mobile/6RzH9Z0okHR.png",
  "/mobile/6S1fBRqvQiL.png",
  "/mobile/6S5WcfGI8Vu.png",
  "/mobile/6SA7xgC9ooF.png",
  "/mobile/6SmilqwpkFT.png",
  "/mobile/6T2LbontrH8.png",
  "/mobile/6TDWrLjsqBd.png",
  "/mobile/6TE7K41CKv7.png",
  "/mobile/6TFqTF4sBhn.png",
  "/mobile/6Tjimkpp5pq.png",
  "/mobile/6TlM8xQzKDV.png",
  "/mobile/6TSKKwDBC4B.png",
  "/mobile/6U3YjxZRRDO.png",
  "/mobile/6Ua8OmblzBg.png",
  "/mobile/6UtjWFfrGqG.png",
  "/mobile/6UzXrnAIqZ3.png",
  "/mobile/6Va8ZtM2S13.png",
  "/mobile/6VIehTXm6oi.png",
  "/mobile/6VkjkUi55S4.png",
  "/mobile/6WCJM7bghZi.png",
  "/mobile/6WF4Gticllp.png",
  "/mobile/6WrsqNRNgZ4.png",
  "/mobile/6X6nqprwwIE.png",
  "/mobile/6XvP4Lhe5bw.png",
  "/mobile/6XvP4Lhe5bw_X.png",
  "/mobile/6XXon5jNDP4.png",
  "/mobile/6YFrwTr3uCE.png",
  "/mobile/6YqeDtSvARc.png",
  "/mobile/6YvC9BTgers.png",
  "/mobile/6Z3oyHyaYnh_P_0_0_607_155.png",
  "/mobile/6ZDmpNExELQ.png",
  "/mobile/6ZDmpNExELQ_P_0_122_1921_958.png",
  "/mobile/6Zoocxz8gBW.png",
  "/mobile/6Zzr75eADNc_X.png",
  "/mobile/poster_5sq07FARxTB_video_5ZysLWwmsPN_22_160_1920x1080.jpg",
  "/mobile/Shape5f1tQed7efr.png",
  
  "/story_content/5etcDtWyZ1r_44100_160_1.mp3",
  "/story_content/5izOVULHwxG_44100_160_0.mp3",
  "/story_content/5n9qQEz5KGS_44100_160_1.mp3",
  "/story_content/5qOugMkVfqD_44100_160_1.mp3",
  "/story_content/5rvOsXDwrTM_44100_160_1.mp3",
  "/story_content/5u3DwYGlL9P_44100_160_1.mp3",
  "/story_content/5W8nAwem0zL_44100_160_1.mp3",
  "/story_content/5ZCVAxivyeK_44100_160_1.mp3",
  "/story_content/63B27Elx3Rl_44100_160_1.mp3",
  "/story_content/64MuoE2UTMH_44100_160_1.mp3",
  "/story_content/65W1Y3hCpwe_44100_160_1.mp3",
  "/story_content/69supPXXnLY_44100_160_1.mp3",
  "/story_content/6a9hzg0wGQe_44100_160_1.mp3",
  "/story_content/6AKa2p6fuJ1_44100_160_1.mp3",
  "/story_content/6bLXCgoF229_44100_160_1.mp3",
  "/story_content/6eAKfnLilkb_44100_160_1.mp3",
  "/story_content/6EL3JIqAlJt_44100_160_1.mp3",
  "/story_content/6F83VIYDQ3G_44100_160_1.mp3",
  "/story_content/6gFd6lCxt8D_44100_160_1.mp3",
  "/story_content/6iQEaTFrXjH_44100_160_1.mp3",
  "/story_content/6nrSzGeh320_44100_160_1.mp3",
  "/story_content/6Nw5wUhtjOZ_44100_160_1.mp3",
  "/story_content/6pzmTMuj71N_44100_160_1.mp3",
  "/story_content/6qcUPcO3vad_44100_160_1.mp3",
  "/story_content/6S5dRiT6v6L_44100_160_1.mp3",
  "/story_content/6Tt15R7PWSr_44100_160_0.mp3",
  "/story_content/6U9zdPc0JHR_44100_160_1.mp3",
  "/story_content/6V2lNUSOs3r_44100_160_1.mp3",
  "/story_content/6Zm2MPTb7T8_44100_160_1.mp3",
  "/story_content/frame.xml",
  "/story_content/thumbnail.jpg",
  "/story_content/triggers.js",
  "/story_content/user.js",
  "/story_content/video_5ZysLWwmsPN_22_160_1920x1080.mp4"
];
// Installation: Caches all necessary assets
self.addEventListener('install', (installEvent) => {
  console.log("Service worker installed", installEvent);
  
  installEvent.waitUntil(
    caches.open(cacheName).then((cache) => {
      return Promise.all(
        assets.map((asset) => {
          return cache.add(asset).catch((err) => {
            console.error(`Failed to cache ${asset}:`, err);
          });
        })
      );
    }).catch((err) => {
      console.error("Failed to open cache", err);
    })
  );
});

// Activation: Clears old caches
self.addEventListener("activate", (activateEvent) => {
  activateEvent.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName)
        .map((key) => caches.delete(key))
      );
    })
  );
});

// Fetch: Respond from cache if possible, otherwise fetch from network
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((cachedResponse) => {
      // If there's a cache match, return it
      if (cachedResponse) {
        return cachedResponse;
      }
      
      // Otherwise, fetch from network
      return fetch(fetchEvent.request).catch(() => {
        // Handle failed fetch (e.g., offline scenario)
        if (fetchEvent.request.method === "GET") {
          // Optional: You can return a fallback page here (e.g., offline page)
          return caches.match('/offline.html');
        } else if (fetchEvent.request.method === "POST") {
          // Store failed POST request for retry later
          saveFailedRequest(fetchEvent.request);
        }
      });
    })
  );
});

// Store failed POST requests (or others) for retry when the network is restored
let failedRequests = [];

// Function to save the request
function saveFailedRequest(request) {
  const clonedRequest = request.clone();
  
  clonedRequest.json().then(body => {
    // Push the request details into an array (you can use IndexedDB for persistence)
    failedRequests.push({
      url: request.url,
      method: request.method,
      body
    });
    console.log("Failed request saved for retry:", clonedRequest);
  });
}

// Retry failed requests when network is back online
self.addEventListener('online', () => {
  failedRequests.forEach(req => {
    fetch(req.url, {
      method: req.method,
      body: JSON.stringify(req.body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        console.log("Successfully retried request:", req.url);
        failedRequests = failedRequests.filter(r => r.url !== req.url); // Remove the retried request
      }
    }).catch(err => {
      console.log("Failed to retry request:", req.url);
    });
  });
});



