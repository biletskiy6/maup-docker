<template>
  <div class="gallery">
    <div class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/771317/pexels-photo-771317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
      </ul>
    </div>
    <div class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/5212325/pexels-photo-5212325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
      </ul>
    </div>
    <div class="demo-gallery">
      <ul class="wrapper">
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/5088186/pexels-photo-5088186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
        <li>
          <img
            height="874"
            src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            width="1240"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'Gallery',
  mounted() {
    gsap.utils.toArray('.gallery .demo-gallery').forEach((section, index) => {
      const w = section.querySelector('.demo-gallery .wrapper')
      // eslint-disable-next-line no-unreachable
      const [x, xEnd] =
        index % 2
          ? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0]
      gsap.fromTo(
        w,
        { x },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.5,
            ease: 'power4'
          }
        }
      )
    })
  }
}
</script>

<style lang="scss"></style>
