<template>
  <div>
	<section class="contacts">
		<div class="container">
			<h2 class="block-title">Наши контакты</h2>
			<div class="contact-block">
				<div class="contact-mob-block">
					<span class="pre-data"><i class="fa fa-phone"></i> Телефоны для связи: </span>
						<div class="num_block">
						<div class="contact_phone">
						<a href="tel:+380675034270" class="num_phone">+38 (067) 503-42-70</a>
						<span class="name">(Александр)</span>
						</div>
						<div class="contact_phone">
						<a href="tel:+380978911551" class="num_phone">+38 (067) 339-52-39</a> 
						<span class="name">(Александр)</span>
						</div>
						<span class="contact_phone">+38 (044) 337-74-79</span>
					</div>
				</div>
				<div class="footer-common-adress">
				<div class="common_adress_item">
					<i class="fa fa-building"></i>
					<span class="pre-data">Адрес офиса/склада:</span> 
					<div class="adress">
						г.Киев, ул.Клеманская, 5, 02081 
					</div>
				</div> 	
				<div class="common_adress_item">
					<i class="fa fa-envelope"></i>
					<span class="pre-data">Электронная почта: </span>
					<div class="mail">
						<a href="mailto:ckk1@ukr.net"class="footer-mail">ckk1@ukr.net</a> 
					</div>
				</div>
				</div>
			</div>
		</div>
	</section>

	<section class="map">
	  <div class="container">
	    <div class="map_google" id="map"></div>
	  </div>
	</section>
</div>
</template>
<script>

export default {
  head () {
    return {
      title: 'Контакты'
    }
  }
}
</script>

<style lang="scss">
.contacts .block-title {
	margin: 120px 0 50px;
}
.contact-block {
	font-size: 16px;
	line-height: 35px;
	display: flex;
	margin-bottom: 40px;
	justify-content: center;
}
.contact-mob-block {
	display: inline-flex;
	width: 40%;
	flex-direction: column;
}
.contact-block .fa {
	width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background: #ffc527;
    color: #fff;
    font-size: 16px;
    border-radius: 2px;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
    margin-right: 8px;
}
.contact-block .common_adress_item {
	margin-bottom: 20px;
}
.contact-block a {
	text-decoration: none;
	color: #000;
}
.contact_phone,
.adress,
.mail {
	margin-left: 40px;
}
</style>


