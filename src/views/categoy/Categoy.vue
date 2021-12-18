<template>
  <div class="wrapper">
    <!-- <h2>Categoy</h2> -->
    <ul class="content">
      <li>better-scaoll测试1</li>
      <li>better-scaoll测试2</li>
      <li>better-scaoll测试3</li>
      <li>better-scaoll测试4</li>
      <li>better-scaoll测试5</li>
      <li>better-scaoll测试6</li>
      <li>better-scaoll测试7</li>
      <li>better-scaoll测试8</li>
      <li>better-scaoll测试9</li>
      <li>better-scaoll测试10</li>
      <li>better-scaoll测试11</li>
      <li>better-scaoll测试12</li>
      <li>better-scaoll测试13</li>
      <li>better-scaoll测试14</li>
      <li>better-scaoll测试15</li>
      <li>better-scaoll测试16</li>
      <li>better-scaoll测试17</li>
      <li>better-scaoll测试18</li>
      <li>better-scaoll测试19</li>
      <li>better-scaoll测试20</li>
      <li>better-scaoll测试21</li>
      <li>better-scaoll测试22</li>
      <li>better-scaoll测试23</li>
      <li>better-scaoll测试24</li>
      <li>better-scaoll测试25</li>
      <li>better-scaoll测试26</li>
      <li>better-scaoll测试27</li>
      <li>better-scaoll测试28</li>
      <li>better-scaoll测试29</li>
      <li>better-scaoll测试30</li>
      <li>better-scaoll测试31</li>
      <li>better-scaoll测试32</li>
      <li>better-scaoll测试33</li>
      <li>better-scaoll测试34</li>
      <li>better-scaoll测试35</li>
      <li>better-scaoll测试36</li>
      <li>better-scaoll测试37</li>
      <li>better-scaoll测试38</li>
      <li>better-scaoll测试39</li>
      <li>better-scaoll测试40</li>
      <li>better-scaoll测试41</li>
      <li>better-scaoll测试42</li>
      <li>better-scaoll测试43</li>
      <li>better-scaoll测试44</li>
      <li>better-scaoll测试45</li>
      <li>better-scaoll测试46</li>
      <li>better-scaoll测试47</li>
      <li>better-scaoll测试48</li>
      <li>better-scaoll测试49</li>
      <li>better-scaoll测试50</li>
      <li>better-scaoll测试51</li>
      <li>better-scaoll测试52</li>
      <li>better-scaoll测试53</li>
      <li>better-scaoll测试54</li>
      <li>better-scaoll测试55</li>
      <li>better-scaoll测试56</li>
      <li>better-scaoll测试57</li>
      <li>better-scaoll测试58</li>
      <li>better-scaoll测试59</li>
      <li>better-scaoll测试60</li>
      <li>better-scaoll测试61</li>
      <li>better-scaoll测试62</li>
      <li>better-scaoll测试63</li>
      <li>better-scaoll测试64</li>
      <li>better-scaoll测试65</li>
      <li>better-scaoll测试66</li>
      <li>better-scaoll测试67</li>
      <li>better-scaoll测试68</li>
      <li>better-scaoll测试69</li>
      <li>better-scaoll测试70</li>
      <li>better-scaoll测试71</li>
      <li>better-scaoll测试72</li>
      <li>better-scaoll测试73</li>
      <li>better-scaoll测试74</li>
      <li>better-scaoll测试75</li>
      <li>better-scaoll测试76</li>
      <li>better-scaoll测试77</li>
      <li>better-scaoll测试78</li>
      <li>better-scaoll测试79</li>
      <li>better-scaoll测试80</li>
      <li>better-scaoll测试81</li>
      <li>better-scaoll测试82</li>
      <li>better-scaoll测试83</li>
      <li>better-scaoll测试84</li>
      <li>better-scaoll测试85</li>
      <li>better-scaoll测试86</li>
      <li>better-scaoll测试87</li>
      <li>better-scaoll测试88</li>
      <li>better-scaoll测试89</li>
      <li>better-scaoll测试90</li>
      <li>better-scaoll测试91</li>
      <li>better-scaoll测试92</li>
      <li>better-scaoll测试93</li>
      <li>better-scaoll测试94</li>
      <li>better-scaoll测试95</li>
      <li>better-scaoll测试96</li>
      <li>better-scaoll测试97</li>
      <li>better-scaoll测试98</li>
      <li>better-scaoll测试99</li>
      <li>better-scaoll测试100</li>
    </ul>
  </div>
</template>

<script>
import betterScroll from "@better-scroll/core";
import Pullup from '@better-scroll/pull-up'
betterScroll.use(Pullup)
export default {
  name: "Categoy",
  components: {
    betterScroll,
    Pullup
  },
  mounted() {
    new betterScroll(".wrapper", {
      probeType:2,
      pullUpLoad:true
    }).on('scroll',(position) => {
      // console.log(position);
    }).on('pullingUp',() => {
      console.log("上拉加载更多");
    })
  },
};
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: cadetblue;
  overflow: hidden;
}
</style>
