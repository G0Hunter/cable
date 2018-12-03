<template>
  <div class="wrapper">
    <header class="header">
      <div class="container header-inner">
        <nav class="header__menu">
          <ul class="header__nav">
            <li class="header__nav-item">
              <nuxt-link to="/" class="header-nav__link">Главная</nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link to="/catalog" class="header-nav__link">Каталог</nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link to="/about" class="header-nav__link">О нас</nuxt-link>
            </li>
            <li class="header__nav-item">
              <nuxt-link to="/contacts" class="header-nav__link">Контакты</nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="header__logo">
          <img src="../assets/img/logo.png" alt="ncc-cable" class="header__logo-item">
        </div>
        <div class="header__geo">
          <div class="header__geo-sub">г.Киев </div>
          <div class="header__geo-sub">ул.Клеманская</div>
          <div class="header__geo-sub">5, 02081</div>
        </div>
        <div class="header__contacts">
          <div class="header__contacts-item">+38 (067) 503-42-70</div>
          <div class="header__contacts-item">+38 (067) 339-52-39</div>
          <div class="header__contacts-item">+38 (044) 337-74-79</div>
        </div>
      </div>
    </header>
    
    <div class="content_wrap">
      <nuxt />
    </div>

    <footer class="footer">
      <div class="container clearfix">
        <div class="footer-inner">
          <div class="left-contact-block">
            <div class="footer__contacts">
              <div class="footer__contacts-item">+38 (067) 503-42-70</div>
              <div class="footer__contacts-item">+38 (067) 339-52-39</div>
              <div class="footer__contacts-item">+38 (044) 337-74-79</div>
            </div>
            <div class="footer__geo">
              <div class="footer__geo-sub">г. Киев, </div>
              <div class="header__geo-sub">ул. Клеманская</div>
              <div class="header__geo-sub">5, 02081</div>
            </div>
          </div>
          <div class="right-contact-block">
            <div class="footer__logo">
              <img src="../assets/img/logo_bottom.png" alt="ncc-cable" class="footer__logo-item">
            </div>
            <span>&#169; 2014-2018</span>
          </div>
        </div>
        <!-- <a href="#header" class="go-top">НАВЕРХ</a> -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
*, *:before, *:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body {
  background-color: #fff;
  color: #2e2f30;
  letter-spacing: 0.5px;
  font-size: 18px;
  font-family: "Source Sans Pro", Arial, sans-serif;
  height: 100vh;
  margin: 0;
}

</style>
