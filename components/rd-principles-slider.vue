<template>
  <div class="principles-slider" data-position="1">
    <div class="principles-slider__container">
      <div class="principles-slider__slider | active" data-color="yellow" data-position="1">
        <span class="principles-slider__number">01</span>
        <div class="principles-slider__info">
          <h3 class="principles-slider__title">Participatory</h3>
          <p class="principles-slider__text">Engaging and informing individuals and groups affected by the use of data
            for and about children.</p>
        </div>
      </div>
      <div class="principles-slider__slider" data-color="green" data-position="2">
        <span class="principles-slider__number">02</span>
        <div class="principles-slider__info">
          <h3 class="principles-slider__title">Professionally Accountable</h3>
          <p class="principles-slider__text">Operationalizing responsible data practices and principles by establishing
            institutional processes, roles, and responsibilities.</p>
        </div>
      </div>
      <div class="principles-slider__slider" data-color="orange" data-position="3">
        <span class="principles-slider__number">03</span>
        <div class="principles-slider__info">
          <h3 class="principles-slider__title">People-Centric</h3>
          <p class="principles-slider__text">Ensuring the needs and expectations of children, their caregivers, and
            their communities are prioritized by actors handling data for and about them.</p>
        </div>
      </div>
      <div class="principles-slider__slider" data-color="purple" data-position="4">
        <span class="principles-slider__number">04</span>
        <div class="principles-slider__info">
          <h3 class="principles-slider__title">Prevention Of Harms Across The Data Life Cycle</h3>
          <p class="principles-slider__text">Establishing end-to-end data responsibility by assessing risks during the
            collecting, storing, preparing, sharing, analyzing, and using stages of the data life cycle.</p>
        </div>
      </div>
      <div class="principles-slider__slider" data-color="red" data-position="5">
        <span class="principles-slider__number">05</span>
        <div class="principles-slider__info">
          <h3 class="principles-slider__title">Proportional</h3>
          <p class="principles-slider__text">Aligning the breadth of data collection and duration of data retention with
            the intended purpose.</p>
        </div>
      </div>
      <div class="principles-slider__slider" data-color="blue" data-position="6">
        <span class="principles-slider__number">06</span>
        <div class="principles-slider__info">
          <h3 class="principles-slider__title">Protective Of Children’s Rights</h3>
          <p class="principles-slider__text">Recognizing the distinct rights and requirements for helping children
            develop to their full potential.</p>
        </div>
      </div>
      <div class="principles-slider__slider" data-color="purple" data-position="7">
        <span class="principles-slider__number">07</span>
        <div class="principles-slider__info">
          <h3 class="principles-slider__title">Purpose-Driven</h3>
          <p class="principles-slider__text">Identifying and specifying why the data is needed and how the intended or
            potential benefits relate to improving children’s lives.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="center center--wrapper | padding-top:s1">
    <div class="principles-slider__nav" aria-hidden="true" data-position="1">
      <span class="principles-slider__marker"></span>
      <div class="principles-slider__navbar">
        <a href="javascript:slideControl('next','1');" class="principles-slider__jumper" title="To slide 1"></a>
        <span class="principles-slider__spacer"></span>
        <a href="javascript:slideControl('next','2');" class="principles-slider__jumper" title="To slide 2"></a>
        <span class="principles-slider__spacer"></span>
        <a href="javascript:slideControl('next','3');" class="principles-slider__jumper" title="To slide 3"></a>
        <span class="principles-slider__spacer"></span>
        <a href="javascript:slideControl('next','4');" class="principles-slider__jumper" title="To slide 4"></a>
        <span class="principles-slider__spacer"></span>
        <a href="javascript:slideControl('next','5');" class="principles-slider__jumper" title="To slide 5"></a>
        <span class="principles-slider__spacer"></span>
        <a href="javascript:slideControl('next','6');" class="principles-slider__jumper" title="To slide 6"></a>
        <span class="principles-slider__spacer"></span>
        <a href="javascript:slideControl('next','7');" class="principles-slider__jumper" title="To slide 7"></a>
      </div>
    </div>
    <div class="link-line">
      <p class="home-link | principles-slider__link" data-visibility="desktop-only" aria-hidden="true"><a
          href="javascript:slideControl('prev');" class="link" title="Previous slide">Previous</a><a
          href="javascript:slideControl('next');" class="link" title="Next slide">Next</a></p>
      <p class="home-link">Read about our principles at <br data-visibility="mobile-only" /><a href="/principles"
          class="link">Principles Page</a></p>
    </div>
  </div>

</template>

<script setup>
const principles = await queryContent('principles').find();
</script>

<style lang="scss" scoped>
/***********PRINCIPLES SLIDER*************/

.principles-slider {
  --spacing: calc((100vw - var(--width))/2);
  padding-left: var(--spacing);
  width: 100%;

  @media (max-width: 36em) {
    padding: 0;
    width: 90%;
    margin: 0 auto
  }
}

.principles-slider__container {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  scroll-snap-type: x mandatory;
}

.principles-slider__slider {
  width: 60vw;
  min-width: 60vw;
  position: relative;
  padding-right: 7vw;
  display: flex;
  justify-content: flex-end;
  scroll-snap-align: start;
  opacity: 0.25;
  transition: opacity 0.5s ease-out;

  @media (max-width: 36em) {
    width: 90vw;
    min-width: 90vw;
  }

  &.active {
    opacity: 1;
  }

  &[data-color="purple"] {
    .principles-slider__title {
      color: var(--base-purple);
    }
  }

  &[data-color="red"] {
    .principles-slider__title {
      color: var(--base-red);
    }
  }

  &[data-color="yellow"] {
    .principles-slider__title {
      color: var(--text-yellow);
    }
  }

  &[data-color="green"] {
    .principles-slider__title {
      color: var(--text-green);
    }
  }

  &[data-color="blue"] {
    .principles-slider__title {
      color: var(--text-blue);
    }
  }

  &[data-color="orange"] {
    .principles-slider__title {
      color: var(--text-orange);
    }
  }
}

.principles-slider__number {
  font-weight: 700;
  letter-spacing: -.035em;
  color: rgba(0, 0, 0, .02);
  font-size: 23vw;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  @media (max-width: 36em) {
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 75vw;
  }
}

.principles-slider__info {
  width: 65%;
  padding: 130px 0;
  position: relative;

  @media (max-width: 36em) {
    padding: 20px 7px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}

.principles-slider__title {
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 11px;

  @media (max-width: 36em) {
    font-size: 1.6em;
  }
}

.principles-slider__text {
  font-size: 1.125em;
  line-height: 1.55em;
  color: #676A73;
}

.principles-slider__link {
  :first-child {
    margin-right: 32px;
  }
}

.principles-slider__nav {
  background-color: #EAEBED;
  margin-bottom: 32px;
  position: relative;

  &[data-position="1"] {
    .principles-slider__marker {
      left: 0;
    }
  }

  &[data-position="2"] {
    .principles-slider__marker {
      left: calc(((100%) / 7));
    }
  }

  &[data-position="3"] {
    .principles-slider__marker {
      left: calc(((100%) / 7) * 2);
    }
  }

  &[data-position="4"] {
    .principles-slider__marker {
      left: calc(((100%) / 7) * 3);
    }
  }

  &[data-position="5"] {
    .principles-slider__marker {
      left: calc(((100%) / 7) * 4);
    }
  }

  &[data-position="6"] {
    .principles-slider__marker {
      left: calc(((100%) / 7) * 5);
    }
  }

  &[data-position="7"] {
    .principles-slider__marker {
      left: calc(((100%) / 7) * 6);
    }
  }
}

.principles-slider__marker {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: calc(((100% - 96px) / 7) + 16px);
  background-color: var(--text-blue);
  transition: left 0.5s ease-in-out;
}

.principles-slider__navbar {
  position: relative;
  --test: attr(data-size);
  height: 8px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.principles-slider__jumper {
  flex-grow: 1;
  height: 8px;
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: -3px;
    right: -3px;
    height: 2px;
    transition: height 0.1s linear;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  &:hover,
  &:active,
  &:focus {

    &:before,
    &:after {
      height: 0;
    }
  }
}

.principles-slider__spacer {
  width: 16px;
  background-color: #FFF;
  height: 8px;
}

.link-line {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 36em) {
    justify-content: center;
  }
}
</style>
