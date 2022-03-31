<template>
  <footer>
    <div id="wave">
    </div>
    <div class="content">
      <div class="info">
        <h5> ارتباط با ما: </h5>
        <p>
          <font-awesome-icon icon="phone"></font-awesome-icon>
          ۰۹۱۷۰۰۰۱۲۳۴
          <font-awesome-icon icon="phone"></font-awesome-icon>
        </p>
        <p>
          <font-awesome-icon icon="envelope"></font-awesome-icon>
          support@hocshirazu.ir
          <font-awesome-icon icon="envelope"></font-awesome-icon>
        </p>
        <h5>با زنگ برنامه نویسی در شبکه های اجتماعی باشید !</h5>
        <div class="contacts">
          <a>
            <img src="static/images/telegram.png">
          </a>
          <a>
            <img src="static/images/instagram.png">
          </a>
          <a>
            <img src="static/images/linkedin.png">
          </a>
        </div>
      </div>
      <div class="logos">
        <a>
          <img src="static/images/logo.png">
          <p>زنگ برنامه نویسی بین المللی</p>
        </a>
        <a>
          <img src="static/images/shiraz.png">
          <p>دانشگاه شیراز</p>
        </a>
        <a>
          <img src="static/images/acm.png">
          <p>انجمن ACM</p>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  width: 100%;
  min-height: 100px;
  overflow: hidden;
  color: black;

}




.logos{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  max-width: 600px;
  margin: 30px auto;
}
.logos a{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logos a img{
  width: 90px;
}
.logos a p{
  margin-top: 6px;
  font-size: 13px;
}

.info {
  text-align: center;
}
.info p {
  margin-bottom: 0;
}
.info h5{
  margin-top: 15px;
}

.contacts{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px auto;
  max-width: 400px;
}

@media screen and (min-width: 1000px){

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
    gap: 20%;
  }
  #wave {
    display: block;
    position: relative;
    height: 40px;
    background: #004948;
    z-index: -1;
  }

  #wave:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color: white;
    right: -25%;
    top: 20px;
    z-index: -1;
  }

  #wave:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color: #004948;
    left: -25%;
    top: -240px;
  }

}
</style>