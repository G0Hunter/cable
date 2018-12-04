<template>
  <div class="main">
    <div class="main-container">
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
          <img src="../assets/img/logo_top.png" alt="ncc-cable" class="header__logo-item">
        </div>
        <div class="header__geo">
          <div class="header__geo-sub">г.Киев, </div>
          <div class="header__geo-sub">ул.Магнитогорская</div>
          <div class="header__geo-sub">1Е, 02094</div>
        </div>
        <div class="header__contacts">
          <div class="header__contacts-item">+38 (067) 503-42-70</div>
          <div class="header__contacts-item">+38 (097) 891-15-51</div>
          <div class="header__contacts-item">+38 (044) 337-74-79</div>
        </div>
      </div>
    </header>
      <div class="container">
        <div class="main-row">
          <h1 class="title-red">TM "NCC-CABLE"</h1>
          <h2 class="title-main">
            кабельно - проводниковая <br> 
            продукция
          </h2>
        </div>
        <div class="main-row main-row-ac">
          <h3 class="subtitle">Высококачественные силовые, сигнальные, огнестойкие кабели и кабели связи</h3>
        </div>
        <div class="main-btn-wrap">
          <nuxt-link to="/catalog" class="header-main-btn">Перейти в каталог</nuxt-link>
        </div>
      </div>
    </div>
    <section id="offer" class="offer">
      <div class="container">
        <h2 class="block-title">Мы гарантируем</h2>
        <div class="offer-items-wrap">
          <div class="offer-item wow fadeInLeftBig delay-03s animated">
            <div class="check-container">
              <span class="fa fa-check"></span>
            </div>
            <h3 class="offer-item-header">Качество услуг</h3>
            <p class="offer-item-text"> Наши заказчики получают гарантию на все произведенные работы. Проекты, реализуемые Компанией, соответствуют нормам и правилам в сфере электроэнергетики, а руководство создает все условия для выполнения качественных работ сотрудниками.</p>
          </div>
          <div class="offer-item wow fadeInLeftBig delay-03s animated">
            <div class="check-container">
              <span class="fa fa-check"></span>
            </div>
            <h3 class="offer-item-header">Мобильность</h3>
            <p class="offer-item-text"> Сотрудничество с нашей Компанией позволяет заказчикам экономить время. Наши специалисты оперативно реализуют проекты. Минимизация сроков выполнения работ достигается исключительно за счет оптимизации процессов – без ущерба качеству.</p>
          </div>
          <div class="offer-item wow fadeInRightBig delay-03s animated">
            <div class="check-container">
              <span class="fa fa-check"></span>
            </div>
            <h3 class="offer-item-header">Профессионализм</h3>
            <p class="offer-item-text"> Штат нашей Компании составляют высококвалифицированные профильные специалисты, которые постоянно повышают свою компетентность и профессиональный уровень. Именно это позволяет успешно реализовывать и предвосхищать ожидания наших клиентов.</p>
          </div>
          <div class="offer-item wow fadeInRightBig delay-03s animated">
            <div class="check-container">
              <span class="fa fa-check"></span>
            </div>
            <h3 class="offer-item-header">Порядочность</h3>
            <p class="offer-item-text"> Компания добросовестно выполняет взятые на себя обязательства, так как доверие клиентов для нас главная ценность. По мере выполнения работ специалисты предоставят Вам текущую и итоговую отчетность, что позволит конструктивно решить возможные затруднения в работе с заказчиками.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="about" id="about">
      <div class="container">
        <h2 class="block-title">ТОВ «ПІВНІЧНА КАБЕЛЬНА КОМПАНІЯ»</h2>
        <div class="about-wrap">
          <div class="about-img wow fadeInLeft"></div>
          <div class="about-text wow fadeInRight">
            <p>Один из новейших современных
            производителей проводов и кабелей с широкой номенклатурой выпускаемой продукции в
            Украине.</p>

            <p>Кабельный Завод <strong>«ПКК»</strong> основан в 2014 году в Украине, быстро превратился в
            мощное предприятие, основным направлением которого стало производство кабельно-
            проводниковой продукции  по новейшим технологиям.</p>

            <p>Кабельный завод <strong>«ПКК»</strong> является одним из новейших украинских производителей
            кабельно-проводниковой продукции, который имеет мощную производственно-
            технологическую базу, большой опыт от руководящего состава до специализирующих
            рабочих позволяющих выпускать продукцию высочайшего качества, что подтверждено
            сертификатами соответствия <strong>УкрСЕПРО</strong>, международным сертификатом соответствия
            системы качества требованиям <strong>ДСТУ ISO 2001:2009 (ISO 9001:2008,IDT)</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="map">
      <div class="container">
        <h2 class="block-title">Найти нас на карте</h2>
        <div class="map_google" id="map"></div>
      </div>
    </section>
    </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Главная'
    }
  },
  layout: 'main',
  data () {
  	return {
  		banners: [ '/j-red.png'],
  		swiperOption: {
  			pagination: {
  				el: '.swiper-pagination'
  			},
          // some swiper options...
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.main-btn-wrap {
  text-align: center;
}
.header-main-btn {
  display: inline-block;
  margin: 60px 0 0;
  border: 1px solid #df2d2d;
  border-radius: 3px;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  padding: 10px 20px;
  transition: .5s;
  &:hover {
    background-color: #df2d2d;
  }
}
.title-red {
  color: #df2d2d;
  font-size: 32px;
  font-weight: 500;
  margin-top: 80px;
  margin-bottom: 10px;
  text-align: center;
}
.subtitle {
  width: 500px;
  margin: 20px auto 0;
  line-height: 34px;
  font-weight: 200;
  font-size: 20px;
  text-align: center;
  color: #fff;
  opacity: .8;
}
.title-main {
  text-transform: uppercase;
  font-size: 36px;
  line-height: 52px;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
}
.header {
  &__nav {
    &-item {
      opacity: .8;
      color: #fff;
    }
  }
  &__contacts,
  &__geo {
    opacity: .8;
    color: #fff;
    &-item {
      background-image: url(~@/assets/img/phone_w.png);
      background-repeat: no-repeat;
      background-size: 14px;
      padding-left: 25px;
    }
  }
  &__geo {
    padding-left: 25px;
    background-image: url(~@/assets/img/geo_w.png);
    background-repeat: no-repeat;
    background-size: 15px;
  }
}
.about {
  padding: 60px 0 100px;
  background-image: url('~@/assets/img/bg_catalog_un.png');
  background-repeat: no-repeat;
  background-position: top 10px right;
  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto 0;
  }
  &-text {
    font-size: 20px;
    max-width: 50%;
    line-height: 28px;
    font-weight: 400;
  }
  &-img {
    min-width: 50%;
    height: 250px;
    background-image: url('~@/assets/img/logo-black.png');
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media screen and (max-width:890px) {
    background-image: none;
    padding-bottom: 0;
    &-wrap {
      flex-direction: column;
    }
    &-text {
      max-width: 90%;
    }
  }
  @media screen and (max-width:680px) {
    &-text {
      font-size: 16px;
    }
    &-img {
      height: 150px;
    }
  }
}
.offer {
  background-image: url('~@/assets/img/contact-us-bg.jpg');
  position: relative;
  padding: 60px 0 100px;
  .check-container {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #ffe427;
  }
  .offer-items-wrap {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 30px;
    .offer-item {
      text-align: center;
      max-width: 270px;
      &-header {
        font-size: 18px;
        margin: 20px 0;
        text-transform: uppercase;
      }
      &-text {
        color: #666666;
        font-weight: 300;
        line-height: 1.4;
        font-size: 14px;
        text-align: left;
      }
    }
  }
  @media screen and (max-width:890px) {
    .offer-items-wrap {
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
}
.main-container {
  height: 100vh;
  background-image: url(~@/assets/img/main.png);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
