document.addEventListener('DOMContentLoaded',()=>{
	const hero=document.querySelector('.hero');
	const header=document.querySelector('.header');
	const scrollItems=document.querySelectorAll('.scroll-item');
	const activeLink=document.querySelectorAll('.nav__item');

	activeLink.forEach(item=>{
    item.addEventListener('click',(e)=>{
        activeLink.forEach(el=>{el.classList.remove('link-active');});
        item.classList.add('link-active');
    })
	})

	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;
			document.querySelectorAll('.container').forEach((el, i) => {
				if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
					document.querySelectorAll('.nav__item').forEach((el) => {
						if (el.classList.contains('link-active')) {
							el.classList.remove('link-active');
						}
					});
	
					document.querySelectorAll('.nav__item')[i].classList.add('link-active');
				}
			});
	});


	const scrollAnimation=()=>{
		let windowCenter=(window.innerHeight/2)+window.scrollY;

		scrollItems.forEach(el=>{
			let scrollOffset=el.offsetTop+(el.offsetHeight/5);
			if (windowCenter>= scrollOffset){
				el.classList.add('animation-class');
			}else {
				el.classList.remove('animation-class');
			}
		})

	}

	const headerFixed=()=>{			
		let scrollTop=window.scrollY;
		let heroCenter=hero.offsetHeight/4;

		if (scrollTop>=heroCenter){
			header.classList.add('fixed');
			hero.style.marginTop=`${header.offsetHeight}px`;		
		} else {
			header.classList.remove('fixed');
			hero.style.marginTop=`0px`;
		}

	}
	headerFixed();
	
	scrollAnimation();

	window.addEventListener('scroll',()=>{
		headerFixed();
		scrollAnimation();
	})
	
})