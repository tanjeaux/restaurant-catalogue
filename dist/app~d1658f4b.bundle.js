(()=>{"use strict";var n,A={249:(n,A,e)=>{e.d(A,{A:()=>a});var t=e(354),r=e.n(t),i=e(314),o=e.n(i)()(r());o.push([n.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody,\nhtml {\n  overflow-x: hidden;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  background-color: #FFF8EA;\n  font-family: "Roboto", sans-serif;\n  \n}\n\n/* skip-to-content */\n.skip-to-content {\n  position: absolute;\n  top: -80px;\n  left: 0;\n  padding: 20px;\n  background-color: #fff700;\n  color: rgb(0, 0, 0);\n  z-index: 999;\n}\n\n.skip-to-content:focus {\n  top: 0;\n}\n\n/* Header */\n.header {\n  width: 100%;\n  position: fixed;\n  z-index: 10;\n  padding-block: 1rem;\n  gap: 15rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #3E3232;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);\n}\n\n.header-title {\n  color: #FFF8EA;\n  width: 500px;\n}\n\n.header-menu {\n  color: #FFF8EA;\n  width: 50px;\n  padding-top: 5px;\n  padding-bottom: 15px;\n  font-size: 43px;\n  margin: 10px auto;\n  background: none;\n  border: none;\n  display: block;\n}\n\n.header-nav ul {\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  gap: 2rem 1rem;\n}\n\n.header-nav ul li {\n  list-style-type: none;\n}\n\n.header-nav ul li a {\n  color: #FFF8EA;\n  font-size: 22px;\n  font-weight: bold;\n  padding: 15px;\n  text-decoration: none;\n  transition: 0.3s;\n}\n\n.header-nav ul li a:hover {\n  color: #3E3232;\n  background: #FFF8EA;\n  border-radius: 5px;\n  padding: 15px;\n}\n\n/* main */\nmain {\n  width: 100%;\n  min-height: 100vh;\n  margin: 0 auto;\n  flex: 1;\n}\n\n.content {\n  padding: 30px;\n}\n\n.catalog {\n  width: 100%;\n  margin: 15px auto;\n  text-align: center;\n}\n\n.catalog-label {\n  font-size: 25px;\n  font-weight: bolder;\n  color: #FFF8EA;\n  background-color: #3E3232;\n  padding: 15px;\n  border-radius: 10px;\n  display: inline-flex;\n  max-width: 400px;\n  animation: slideIn 2.5s ease forwards;\n}\n\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-70px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.app-description {\n  color: #3E3232;\n  font-weight: 500;\n  text-align: center;\n  font-size: 17px;\n  margin-bottom: 2rem;\n  max-width: 1000px;\n  display: inline-flex;\n}\n\n.hero-section {\n  padding-top: 4rem;\n}\n\n.resto-detail, .resto-catalog {\n  margin-top: 2rem;\n}\n\n/* post */\n.post {\n  margin: 50px auto auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-row-gap: 45px;\n  grid-column-gap: 20px;\n  text-align: left;\n  justify-items: center;\n}\n\n/* post item */\n.resto-item {\n  width: 100%;\n  background-color: #FFF5E4;\n  border-radius: 5px;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n\n.resto-item-thumbnail {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  transition: transform 0.3s ease-in-out;\n}\n\n.resto-item-thumbnail:hover {\n  transform: scale(1.1);\n}\n\n.resto-item-content {\n  color: #3E3232;\n  padding: 16px;\n}\n\n.resto-item-location {\n  color: #3E3232;\n  font-size: 16px;\n  font-weight: bold;\n  background: #FFF8EA;\n  padding: 4px 8px;\n  border-radius: 3px;\n  position: absolute; \n  top: 8px; \n  left: 8px; \n  box-sizing: border-box;\n}\n\n.resto-item-rate {\n  color: #3E3232;\n  font-size: 16px;\n  font-weight: bold;\n  background: #FFF8EA;\n  padding: 4px 8px;\n  border-radius: 3px;\n  position: absolute;\n  top: 8px; \n  right: 8px; \n  box-sizing: border-box;\n}\n\n.resto-item-title {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.resto-item-title a {\n  color: #3E3232;\n  text-decoration: none;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.resto-item-title a:hover {\n  color: #6b5c5c;\n  cursor: pointer;\n}\n\n.resto-item-desc {\n  margin-top: 16px;\n  font-size: 14px;\n  line-height: 1.5em;\n  width: 100%;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* Restaurant detail */\n.restaurant-detail {\n  padding: 2rem 1rem;\n  color: #3E3232;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 13px;\n  background-color: #FFF8EA;\n}\n\n.restaurant-name {\n  font-size: 33px;\n  margin-bottom: 30px;\n}\n\n.restaurant-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  margin: 2rem;\n}\n\n.restaurant-main {\n  display: flex;\n  gap: 2rem;\n}\n\n.restaurant-image {\n  flex: 1;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  max-width: 500px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease-in-out;\n}\n\n.restaurant-image:hover {\n  transform: scale(1.05);\n}\n\n.menu-section {\n  flex: 1;\n}\n\n.menu-title {\n  font-weight: bold;\n  font-size: 25px;\n  display: inline-block;\n  width: 100%;\n}\n\n.menu-list {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  border: 2px solid #3E3232;\n  border-radius: 10px;\n  padding: 20px;\n}\n\n.menu-category {\n  margin-bottom: 1rem;\n}\n\n.menu-category-title {\n  font-weight: bold;\n  font-size: 18px;\n  color: #FFF8EA;\n  background-color: #3E3232;\n  padding: 5px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.menu-items {\n  list-style: none;\n  padding: 0;\n  margin-top: 10px;\n}\n\n.restaurant-info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.restaurant-info {\n  flex: 1;\n}\n\n.restaurant-city, .restaurant-description, .restaurant-address {\n  margin: 17px 0;\n  text-align: left;\n}\n\n.restaurant-city{\n  font-weight: bold;\n  font-size: 22px;\n}\n\n.restaurant-address {\n  font-style: italic;\n  font-weight: bold;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #3E3232;\n}\n\n.reviews-section {\n  flex: 1;\n}\n\n.reviews-title {\n  font-weight: bold;\n  font-size: 24px;\n  margin-bottom: 25px;\n}\n\n.reviews-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 30px 25px;\n}\n\n.review-item {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  padding: 15px;\n  border-radius: 10px;\n  background-color: #FFF5E4;\n}\n\n.reviewer-name {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.review-text {\n  margin-top: 15px;\n  font-size: 16px;\n}\n\n.review-date {\n  margin-top: 15px;\n  font-size: 11px;\n  font-style: italic;\n}\n\n\n/* Add review */\n.add-review-section {\n  margin-top: 3rem;\n  padding: 2rem 1rem;\n  color: #3E3232;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 13px;\n  background-color: #FFF8EA;\n}\n\n.add-review-section-title {\n  font-size: 30px;\n  text-align: center;\n}\n\n.form {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  gap: 3rem;\n  \n}\n\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.customer-div {\n  width: 100%;\n}\n\nlabel {\n  font-size: 22px;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n\n\ninput[type=text], textarea {\n  width: 100%;\n  padding: 25px;\n  font-size: 18px;\n  font-family: "Roboto", sans-serif;\n  border-radius: 7px;\n  border: 1px solid black;\n  background-color: #FFF5E4;\n  margin-top: 10px;\n  min-width: 400px;\n}\n\ninput[type=submit] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 25px;\n  font-size: 18px;\n  font-weight: bold;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: #FFF8EA;\n  background-color: #3E3232;\n  max-width: 100px;\n  align-self: center;\n}\n\ninput[type=submit]:hover {\n  color: #3E3232;\n  background: #FFF5E4;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n/* Like button */\n.like {\n  width: 60px;\n  height: 60px;\n  background-color: #be3838;\n  color: #FFF8EA;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  border-radius: 50%;\n  border: none;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n}\n\n/* footer */\nfooter {\n  background-color: #3E3232;\n  width: 100%;\n  text-align: center;\n  line-height: 50px;\n}\n\nfooter p {\n  color: #FFF8EA;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n\n\n',"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:['* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody,\nhtml {\n  overflow-x: hidden;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  background-color: #FFF8EA;\n  font-family: "Roboto", sans-serif;\n  \n}\n\n/* skip-to-content */\n.skip-to-content {\n  position: absolute;\n  top: -80px;\n  left: 0;\n  padding: 20px;\n  background-color: #fff700;\n  color: rgb(0, 0, 0);\n  z-index: 999;\n}\n\n.skip-to-content:focus {\n  top: 0;\n}\n\n/* Header */\n.header {\n  width: 100%;\n  position: fixed;\n  z-index: 10;\n  padding-block: 1rem;\n  gap: 15rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #3E3232;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);\n}\n\n.header-title {\n  color: #FFF8EA;\n  width: 500px;\n}\n\n.header-menu {\n  color: #FFF8EA;\n  width: 50px;\n  padding-top: 5px;\n  padding-bottom: 15px;\n  font-size: 43px;\n  margin: 10px auto;\n  background: none;\n  border: none;\n  display: block;\n}\n\n.header-nav ul {\n  display: flex;\n  justify-content: center;\n  padding-left: 0;\n  gap: 2rem 1rem;\n}\n\n.header-nav ul li {\n  list-style-type: none;\n}\n\n.header-nav ul li a {\n  color: #FFF8EA;\n  font-size: 22px;\n  font-weight: bold;\n  padding: 15px;\n  text-decoration: none;\n  transition: 0.3s;\n}\n\n.header-nav ul li a:hover {\n  color: #3E3232;\n  background: #FFF8EA;\n  border-radius: 5px;\n  padding: 15px;\n}\n\n/* main */\nmain {\n  width: 100%;\n  min-height: 100vh;\n  margin: 0 auto;\n  flex: 1;\n}\n\n.content {\n  padding: 30px;\n}\n\n.catalog {\n  width: 100%;\n  margin: 15px auto;\n  text-align: center;\n}\n\n.catalog-label {\n  font-size: 25px;\n  font-weight: bolder;\n  color: #FFF8EA;\n  background-color: #3E3232;\n  padding: 15px;\n  border-radius: 10px;\n  display: inline-flex;\n  max-width: 400px;\n  animation: slideIn 2.5s ease forwards;\n}\n\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-70px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.app-description {\n  color: #3E3232;\n  font-weight: 500;\n  text-align: center;\n  font-size: 17px;\n  margin-bottom: 2rem;\n  max-width: 1000px;\n  display: inline-flex;\n}\n\n.hero-section {\n  padding-top: 4rem;\n}\n\n.resto-detail, .resto-catalog {\n  margin-top: 2rem;\n}\n\n/* post */\n.post {\n  margin: 50px auto auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-row-gap: 45px;\n  grid-column-gap: 20px;\n  text-align: left;\n  justify-items: center;\n}\n\n/* post item */\n.resto-item {\n  width: 100%;\n  background-color: #FFF5E4;\n  border-radius: 5px;\n  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);\n  position: relative;\n  overflow: hidden;\n}\n\n.resto-item-thumbnail {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  transition: transform 0.3s ease-in-out;\n}\n\n.resto-item-thumbnail:hover {\n  transform: scale(1.1);\n}\n\n.resto-item-content {\n  color: #3E3232;\n  padding: 16px;\n}\n\n.resto-item-location {\n  color: #3E3232;\n  font-size: 16px;\n  font-weight: bold;\n  background: #FFF8EA;\n  padding: 4px 8px;\n  border-radius: 3px;\n  position: absolute; \n  top: 8px; \n  left: 8px; \n  box-sizing: border-box;\n}\n\n.resto-item-rate {\n  color: #3E3232;\n  font-size: 16px;\n  font-weight: bold;\n  background: #FFF8EA;\n  padding: 4px 8px;\n  border-radius: 3px;\n  position: absolute;\n  top: 8px; \n  right: 8px; \n  box-sizing: border-box;\n}\n\n.resto-item-title {\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.resto-item-title a {\n  color: #3E3232;\n  text-decoration: none;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.resto-item-title a:hover {\n  color: #6b5c5c;\n  cursor: pointer;\n}\n\n.resto-item-desc {\n  margin-top: 16px;\n  font-size: 14px;\n  line-height: 1.5em;\n  width: 100%;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* Restaurant detail */\n.restaurant-detail {\n  padding: 2rem 1rem;\n  color: #3E3232;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 13px;\n  background-color: #FFF8EA;\n}\n\n.restaurant-name {\n  font-size: 33px;\n  margin-bottom: 30px;\n}\n\n.restaurant-content {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  margin: 2rem;\n}\n\n.restaurant-main {\n  display: flex;\n  gap: 2rem;\n}\n\n.restaurant-image {\n  flex: 1;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  max-width: 500px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: transform 0.3s ease-in-out;\n}\n\n.restaurant-image:hover {\n  transform: scale(1.05);\n}\n\n.menu-section {\n  flex: 1;\n}\n\n.menu-title {\n  font-weight: bold;\n  font-size: 25px;\n  display: inline-block;\n  width: 100%;\n}\n\n.menu-list {\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  border: 2px solid #3E3232;\n  border-radius: 10px;\n  padding: 20px;\n}\n\n.menu-category {\n  margin-bottom: 1rem;\n}\n\n.menu-category-title {\n  font-weight: bold;\n  font-size: 18px;\n  color: #FFF8EA;\n  background-color: #3E3232;\n  padding: 5px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.menu-items {\n  list-style: none;\n  padding: 0;\n  margin-top: 10px;\n}\n\n.restaurant-info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.restaurant-info {\n  flex: 1;\n}\n\n.restaurant-city, .restaurant-description, .restaurant-address {\n  margin: 17px 0;\n  text-align: left;\n}\n\n.restaurant-city{\n  font-weight: bold;\n  font-size: 22px;\n}\n\n.restaurant-address {\n  font-style: italic;\n  font-weight: bold;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #3E3232;\n}\n\n.reviews-section {\n  flex: 1;\n}\n\n.reviews-title {\n  font-weight: bold;\n  font-size: 24px;\n  margin-bottom: 25px;\n}\n\n.reviews-list {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 30px 25px;\n}\n\n.review-item {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  padding: 15px;\n  border-radius: 10px;\n  background-color: #FFF5E4;\n}\n\n.reviewer-name {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.review-text {\n  margin-top: 15px;\n  font-size: 16px;\n}\n\n.review-date {\n  margin-top: 15px;\n  font-size: 11px;\n  font-style: italic;\n}\n\n\n/* Add review */\n.add-review-section {\n  margin-top: 3rem;\n  padding: 2rem 1rem;\n  color: #3E3232;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  border-radius: 13px;\n  background-color: #FFF8EA;\n}\n\n.add-review-section-title {\n  font-size: 30px;\n  text-align: center;\n}\n\n.form {\n  width: 100%;\n  padding: 10px;\n  display: flex;\n  gap: 3rem;\n  \n}\n\n.input-group {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.customer-div {\n  width: 100%;\n}\n\nlabel {\n  font-size: 22px;\n  font-weight: bold;\n  margin-bottom: 8px;\n}\n\n\ninput[type=text], textarea {\n  width: 100%;\n  padding: 25px;\n  font-size: 18px;\n  font-family: "Roboto", sans-serif;\n  border-radius: 7px;\n  border: 1px solid black;\n  background-color: #FFF5E4;\n  margin-top: 10px;\n  min-width: 400px;\n}\n\ninput[type=submit] {\n  width: 100%;\n  padding: 15px;\n  margin-top: 25px;\n  font-size: 18px;\n  font-weight: bold;\n  border: 1px solid black;\n  border-radius: 5px;\n  color: #FFF8EA;\n  background-color: #3E3232;\n  max-width: 100px;\n  align-self: center;\n}\n\ninput[type=submit]:hover {\n  color: #3E3232;\n  background: #FFF5E4;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n/* Like button */\n.like {\n  width: 60px;\n  height: 60px;\n  background-color: #be3838;\n  color: #FFF8EA;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 25px;\n  right: 25px;\n  border-radius: 50%;\n  border: none;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n}\n\n/* footer */\nfooter {\n  background-color: #3E3232;\n  width: 100%;\n  text-align: center;\n  line-height: 50px;\n}\n\nfooter p {\n  color: #FFF8EA;\n  font-size: 17px;\n  font-weight: bold;\n}\n\n\n\n'],sourceRoot:""}]);const a=o},936:(n,A,e)=>{e.d(A,{A:()=>a});var t=e(354),r=e.n(t),i=e(314),o=e.n(i)()(r());o.push([n.id,"@media screen and (min-width: 1200px) {\n  main {\n    max-width: 1200px;\n  }\n\n  .hero {\n    min-width: 1000px;\n  }\n}\n\n@media screen and (max-width: 1200px) {\n  .header {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    position: relative;\n    gap: 0;\n  }\n\n  .header-title{\n    padding: 10px;\n  }\n\n  .header-nav {\n    padding: 10px;\n  }\n\n  .hero-title {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .hero-p {\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .hero-section {\n    padding-top: 0;\n  }\n  \n  .resto-detail, .resto-catalog {\n    margin-top: 0;\n  }\n\n  .form {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n\n@media screen and (max-width: 499px) {\n  .hero-inner {\n    width: 80%;\n  }\n\n  .header-nav {\n    position: absolute;\n    z-index: 10;\n    width: 150px;\n    background-color: #3E3232;\n    border-radius: 10px;\n    padding: 0;\n    top: 155px;\n    left: 50%;\n    transform: translateX(-50%) translateY(-500px);\n    transition: transform 0.5s ease; \n  }\n\n  .header-nav.open {\n    transform: translateX(-50%) translateY(0);\n  }\n\n  .header-nav ul {\n    display: flex;\n    flex-direction: column;\n    gap: 0;\n  }\n\n  .header-nav ul li a {\n    color: #FFF8EA;\n  }\n\n  .header-nav ul li a:hover {\n    color: #3E3232;\n    padding: 10px;\n    background: #FFF8EA;\n  }\n\n  .header-nav-item {\n    display: list-item;\n    border: 1px solid #FFF8EA;\n    width: 100%;\n    text-align: center;\n    padding: 10px;\n  }\n\n  input[type=text], textarea {\n    min-width: 0;\n  }\n}\n\n\n@media (max-width: 900px) {\n  .restaurant-main {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .restaurant-image {\n    align-self: center;\n    max-width: 100%;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .header-menu {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1200px) {\n  .post, .reviews-list {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n  }\n}\n\n@media screen and (max-width: 350px) {\n  .post {\n    grid-template-columns: 1fr;\n  }\n\n  .reviews-list {\n    grid-template-columns: 1fr;\n    align-items: center;\n  }\n}\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,MAAM;EACR;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,sBAAsB;IACtB,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,UAAU;IACV,UAAU;IACV,SAAS;IACT,8CAA8C;IAC9C,+BAA+B;EACjC;;EAEA;IACE,yCAAyC;EAC3C;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,MAAM;EACR;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,cAAc;IACd,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,aAAa;EACf;;EAEA;IACE,YAAY;EACd;AACF;;;AAGA;EACE;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;IACb,sCAAsC;EACxC;AACF;;AAEA;EACE;IACE,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;IAC1B,mBAAmB;EACrB;AACF",sourcesContent:["@media screen and (min-width: 1200px) {\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n\r\n  .hero {\r\n    min-width: 1000px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    position: relative;\r\n    gap: 0;\r\n  }\r\n\r\n  .header-title{\r\n    padding: 10px;\r\n  }\r\n\r\n  .header-nav {\r\n    padding: 10px;\r\n  }\r\n\r\n  .hero-title {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  .hero-p {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n  }\r\n\r\n  .hero-section {\r\n    padding-top: 0;\r\n  }\r\n  \r\n  .resto-detail, .resto-catalog {\r\n    margin-top: 0;\r\n  }\r\n\r\n  .form {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 499px) {\r\n  .hero-inner {\r\n    width: 80%;\r\n  }\r\n\r\n  .header-nav {\r\n    position: absolute;\r\n    z-index: 10;\r\n    width: 150px;\r\n    background-color: #3E3232;\r\n    border-radius: 10px;\r\n    padding: 0;\r\n    top: 155px;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-500px);\r\n    transition: transform 0.5s ease; \r\n  }\r\n\r\n  .header-nav.open {\r\n    transform: translateX(-50%) translateY(0);\r\n  }\r\n\r\n  .header-nav ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0;\r\n  }\r\n\r\n  .header-nav ul li a {\r\n    color: #FFF8EA;\r\n  }\r\n\r\n  .header-nav ul li a:hover {\r\n    color: #3E3232;\r\n    padding: 10px;\r\n    background: #FFF8EA;\r\n  }\r\n\r\n  .header-nav-item {\r\n    display: list-item;\r\n    border: 1px solid #FFF8EA;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 10px;\r\n  }\r\n\r\n  input[type=text], textarea {\r\n    min-width: 0;\r\n  }\r\n}\r\n\r\n\r\n@media (max-width: 900px) {\r\n  .restaurant-main {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .restaurant-image {\r\n    align-self: center;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .header-menu {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .post, .reviews-list {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n  .post {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .reviews-list {\r\n    grid-template-columns: 1fr;\r\n    align-items: center;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=o},810:(n,A,e)=>{var t=e(72),r=e.n(t),i=e(825),o=e.n(i),a=e(659),d=e.n(a),E=e(56),p=e.n(E),s=e(540),l=e.n(s),B=e(113),C=e.n(B),x=e(249),c={};c.styleTagTransform=C(),c.setAttributes=p(),c.insert=d().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=l(),r()(x.A,c),x.A&&x.A.locals&&x.A.locals},47:(n,A,e)=>{var t=e(72),r=e.n(t),i=e(825),o=e.n(i),a=e(659),d=e.n(a),E=e(56),p=e.n(E),s=e(540),l=e.n(s),B=e(113),C=e.n(B),x=e(936),c={};c.styleTagTransform=C(),c.setAttributes=p(),c.insert=d().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=l(),r()(x.A,c),x.A&&x.A.locals&&x.A.locals}},e={};function t(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,exports:{}};return A[n](i,i.exports,t),i.exports}t.m=A,n=[],t.O=(A,e,r,i)=>{if(!e){var o=1/0;for(p=0;p<n.length;p++){for(var[e,r,i]=n[p],a=!0,d=0;d<e.length;d++)(!1&i||o>=i)&&Object.keys(t.O).every((n=>t.O[n](e[d])))?e.splice(d--,1):(a=!1,i<o&&(o=i));if(a){n.splice(p--,1);var E=r();void 0!==E&&(A=E)}}return A}i=i||0;for(var p=n.length;p>0&&n[p-1][2]>i;p--)n[p]=n[p-1];n[p]=[e,r,i]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var e in A)t.o(A,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:A[e]})},t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n={580:0};t.O.j=A=>0===n[A];var A=(A,e)=>{var r,i,[o,a,d]=e,E=0;if(o.some((A=>0!==n[A]))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(d)var p=d(t)}for(A&&A(e);E<o.length;E++)i=o[E],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(p)},e=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];e.forEach(A.bind(null,0)),e.push=A.bind(null,e.push.bind(e))})(),t.nc=void 0;var r=t.O(void 0,[39,608,738,74,720],(()=>t(956)));r=t.O(r)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map