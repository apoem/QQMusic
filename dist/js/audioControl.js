!function(i,o){function t(){this.audio=new Audio,this.status="pause"}t.prototype={play:function(){this.audio.play(),this.status="play"},pause:function(){this.audio.pause(),this.status="pause"},getAudio:function(i){this.audio.src=i,this.audio.load(),console.log(i)}},o.audioManager=new t}(window.Zeptom,window.player||(window.player={}));