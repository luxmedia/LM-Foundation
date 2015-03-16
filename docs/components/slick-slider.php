<div class="demo-slider">
	<div>
		<img aria-hidden="true" src="http://placehold.it/100x100">
		your content 1
	</div>
	<div>
		<img aria-hidden="true" src="http://placehold.it/100x100">
		your content 2
	</div>
	<div>
		<img aria-hidden="true" src="http://placehold.it/100x100">
		your content 3
	</div>
	<div>
		<img aria-hidden="true" src="http://placehold.it/100x100">
		your content 4
	</div>
	<div>
		<img aria-hidden="true" src="http://placehold.it/100x100">
		your content 5
	</div>
	<div>
		<img aria-hidden="true" src="http://placehold.it/100x100">
		your content 6
	</div>
	<div>
		<img aria-hidden="true" src="http://placehold.it/100x100">
		your content 7
	</div>
	<div>
		<img aria-hidden="true" src="http://placehold.it/100x100">
		your content 8
	</div>
	<div>
		<img aria-hidden="true" src="http://placehold.it/100x100">
		your content 9
	</div>
</div>

<script type="text/javascript">
$('.demo-slider').slick({
dots: true,
infinite: false,
speed: 300,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
    {
        breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
]
});
</script>