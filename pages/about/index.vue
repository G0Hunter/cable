<template>
  <section class="about container" id="about">
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
    </section>
</template>

<script>

export default {
  head () {
    return {
      title: 'О нас'
    }
  }
}
</script>

<style lang="scss">
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
</style>

