<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	img {
		max-width: 100%;
	}
	::-webkit-scrollbar {
	  display: none; 
	}
	* {
	  box-sizing: border-box;
	  margin: 0;
	  padding: 0;
	  font-family: "TC", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "冬青黑体", "Microsoft YaHei", "微软雅黑", Helvetica, Arial, sans-serif !important;
	}
	
	.bangxin {
	  max-width: 14.4rem;
	  margin: 0 auto;
	  /* background-color: green !important; */
	}
	
	
	
	@font-face{
	    font-family: FandolSongBold;
	    src: url('/static/font/FandolSong-Bold.otf');
	}
	 
	div{
	    /* // font-family:myFirstFont; */
	}
	
	
	
	.isWechatBrowser {
	    font-size: 20px;
	    width: 100%;
	    text-align: center;
	    position: fixed;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	  }
	
	/* // placeholder */
	input::-webkit-input-placeholder{
	    color:#fecdd3;
	}
	input::-moz-placeholder{   /* Mozilla Firefox 19+ */
	    color:#fecdd3;
	}
	input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
	    color:#fecdd3;
	}
	input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
	    color:#fecdd3;
	}
	
	
	.fade-enter-active, .fade-leave-active {
	    transition: all 0.3s ease;
	}
	
	
	.fade-enter, .fade-leave-to {
	    opacity: 0;
	}
	
	header {
	    position: fixed;
	  /*  // width: 100%;
	    // height: 100%; */
	    z-index: 10;
	    .topbar {
	        position: fixed;
	        top: 0;
	        left: 0;
	        z-index: 15;
	        background-color: #fff;
	        display: flex;
	        .logo {
	            width: 2.1rem;
	            height: 0.56rem;
	            display: flex;
	            justify-content: center;
	            align-items: center;
	            font-size: 0.2rem;
	            font-family: FandolSongBold !important;
	            color: #000000;
	
	
/* 	            // width: 202undefined;
	            // height: 40undefined;
	            // font-size: 40undefined;
	            // font-family: FandolSong, FandolSong-Bold;
	            // font-weight: 700;
	            // text-align: left;
	            // color: #000000;
	            // line-height: 48undefined; */
	
	
	
	
	            .logo-name {
	                /* // width: 1.11rem; */
	                width: 111px;
	            }
	        }
	        .logo-more {
	            width: 0.56rem;
	            height: 0.56rem;
	            line-height: 0;
	            border-left: 1px rgba(0, 0, 0, 0.1) solid;
	            display: flex;
	            justify-content: center;
	            align-items: center;
	            span {
	                font-size: 0.22rem;
	                margin-top: -0.1rem;
	            }
	            img {
	                /* // width: 0.18rem; */
	            }
	        }
	    }
	    .menu {
	        width: 0.56rem;
	        height: 0.56rem;
	        position: fixed;
	        top: 0;
	        right: 0;
	        z-index: 10;
	        background-color: #b09c6e;
	        font-size: 30px;
	        color: #fff;
	        cursor: pointer;
	        display: flex;
	        justify-content: center;
	        align-items: center;
	        img {
	            width: 18px;
	        }
	    }
	    .header-shadow {
	        position: fixed;
	        top: 0;
	        right: 0;
	        width: 100%;
	        height: 100%;
	        background-color: rgba(0, 0, 0, 0.5);
	        z-index: 11;
	        opacity: 0;
	        transition: all ease-in 0.3s;
	        overflow: hidden;
	        visibility: hidden;
	    }
	    .navs {
	        width: 27%;
	        height: 100vh;
	        background-color: #000;
	        position: fixed;
	        right: -27%;
	        top: 0;
	        z-index: 12;
	        transition: all ease-in 0.4s;
	        .close {
	            width: 20px;
	            height: 20px;
	            cursor: pointer;
	            position: absolute;
	            right: 0.29rem;
	            top: 0.49rem;
	            img {
	                width: 100%;
	                height: 100%;
	            }
	        }
	        .navs-wrap {
	            padding-top: 1.48rem;
	            padding-right: 1.35rem;
	            display: flex;
	            justify-content: flex-end;
	            flex-wrap: wrap;
	            /* // flex-direction: column; */
	            text-align: right;
	            .logo {
	                /* // width: 0.58rem; */
	                /* // height: 0.54rem; */
	                width: 70px;
	                /* // height: 0.7rem; */
	                display: inline-block;
	                /* // width: 100%; */
	                margin-bottom: 0.48rem;
	                margin-right: -8px;
	                img {
	                    width: 100%;
	                    height: 100%;
	                }
	            }
	            .item-wrap {
	                position: relative;
	                width: 100%;
	                .item-parent {
	                    margin-bottom: 10px;
	                 /* //    padding-top: 100px; */
	                     .item {
	                         font-size: 0.2rem;
	                         display: block;
	                         padding-top: 0.15rem;
	                         position: relative;
	                        /* //  font-family: PingFangSC, PingFangSC-Medium; */
	                         font-weight: 500;
	                         text-align: right;
	                         color: #ffffff;
	                         line-height: 0.28rem;
	                         cursor: pointer;
	                         &::before {
	                             position: absolute;
	                             content: "";
	                             top: 0;
	                             right: 0;
	                            display: inline-block;
	                            width: 0.15rem;
	                            height: 0.04rem;
	                            vertical-align: top;
	                            background-color: #b09c6e;
	                            opacity: 0;
	                         }
	                         &.active {
	                            &::before {
	                                opacity: 1;
	                            }
	                         }
	                     }
	                     .second-parent {
	                         padding-top: 0.15rem;
	                         .second-item {
	                             font-size: 0.12rem;
	                             color: #fff;
	                             display: block;
	                            /* //  padding: 0.1rem 0; */
	                             line-height: 0.26rem;
	                            /* //  font-family: PingFangSC, PingFangSC-Medium; */
	                             font-weight: 500;
	
	
	
	                             &.router-link-exact-active {
	                                /* //  background-color: green; */
	                             }
	                         }
	                     }
	                 }
	
	            }
	        }
	
	    }
	    &.active {
	        .header-shadow {
	            opacity: 1;
	            visibility: visible;
	        }
	        .navs {
	            right: 0%;
	        }
	    }
	}
	
	
	
	
	
	footer {
	    width: 100%;
	    padding: 0.7rem 0.5rem 0.55rem 0.5rem;
	    .footer-top {
	        display: flex;
	        flex-wrap: wrap;
	        align-items: flex-start;
	        justify-content: space-between;
	        .nav {
	            display: flex;
	            flex-wrap: wrap;
	            .item-parent {
	                margin-right: 0.95rem;
	                &:last-child {
	                    margin-right: 0;
	                }
	                .item {
	                    font-size: 0.14rem;
	                    /* // font-family: PingFangSC, PingFangSC-Medium; */
	                    font-weight: 500;
	                    /* // font-weight: bold; */
	                    text-align: left;
	                    color: #000000;
	                    line-height: 0.2rem;
	                }
	                .second-parent {
	                    margin-top: 0.2rem;
	                    .second-item {
	                        display: block;
	                        font-size: 0.12rem;
	                        /* // font-family: PingFangSC, PingFangSC-Medium; */
	                        font-weight: 500;
	                        text-align: left;
	                        color: #a3a3a3;
	                        line-height: 0.24rem;
	                    }
	                }
	            }
	        }
	        .account {
	            .account-tit {
	                font-size: 0.14rem;
	                /* // font-family: PingFangSC, PingFangSC-Medium; */
	                font-weight: 500;
	                /* // font-weight: bold; */
	                color: #000000;
	                line-height: 0.2rem;
	                text-align: right;
	            }
	            .wrap {
	                display: flex;
	                flex-wrap: wrap;
	                align-items: center;
	                margin-top: 0.25rem;
	                .qr-code-wrap {
	                    margin-right: 0.12rem;
	                    width: 0.62rem;
	                    height: 0.62rem;
	                    .item {
	                        width: 0.62rem;
	                        display: none;
	                        &.active {
	                            display: block;
	                        }
	                    }
	                }
	                .text-wrap {
	                    .item {
	                        font-size: 0.12rem;
	                        /* // font-family: PingFangSC, PingFangSC-Medium; */
	                        font-weight: 500;
	                        text-align: right;
	                        color: #a3a3a3;
	                        line-height: 0.24rem;
	                        cursor: pointer;
	                        .add {
	                            display: inline-block;
	                            height: 0.1rem;
	                            line-height: 0.1rem;
	                            transform: translateY(-0.015rem);
	                            /* // background-color: red; */
	                        }
	                    }
	                }
	            }
	        }
	    }
	    .footer-bottom {
	        padding-top: 0.45rem;
	        display: flex;
	        justify-content: space-between;
	        .copyright {
	            font-size: 0.12rem;
	            /* // font-family: PingFangSC, PingFangSC-Medium; */
	            font-weight: 500;
	            text-align: left;
	            color: #a3a3a3;
	            line-height: 0.24rem;
	            .tel {
	                color: #b09c6e;
	                margin: 0 0.06rem;
	                font-weight: bold;
	            }
	            a {
	                color: #a3a3a3;
	            }
	        }
	        .site {
	            font-size: 0.12rem;
	            /* font-family: PingFangSC, PingFangSC-Medium; */
	            font-weight: 500;
	            text-align: right;
	            color: #a3a3a3;
	            line-height: 0.24rem;
	        }
	
	    }
	}
	
	
	
</style>
