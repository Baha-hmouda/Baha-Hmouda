const dayEl=document.getElementById("day")
const hourEl=document.getElementById("hour")
const minuteEl=document.getElementById("minute")
const secondEl=document.getElementById("second")
//fl 4 lines hethoma 5arajt les elements ely fl Html ely 3endhom id ("day," "hour," "minute," "second") w baa3d storithom f des variables constantes


const newYearTime=new Date("Jan 1, 2024 00:00:00").getTime()
//fl line hetha 3malt objet jdyd fyh e target mta3y "January 1, 2024, 00:00:00" w y7awla l timestamp bl 'getTime()' , e timestamp mta3y yrepresenti e time ely bsh naamela countdow

updateCountdown()
//function updateCountdown te7seb l wa9t ely mazeel 3al newyear w ta3mel update lel les elements ely fl html bl id
function updateCountdown() {
  const now=new Date().getTime()
  const gap=newYearTime-now
  // calcule lel difference ben e time mta3 e new year wl current time 

  const second=1000
  const minute=second*60
  const hour=minute*60
  const day=hour*24
  // 3malt des variables bsh yabda l calcule ashal

  const d=Math.floor(gap/day)
  const h=Math.floor((gap%day)/hour)
  const m=Math.floor((gap%hour)/minute)
  const s=Math.floor((gap%minute)/second)
  //ne7sbou l ayamet ely maazelou wl hours wl minutes wl seconds using e difference time "gap" 
  //w ysir display f les elements mta3 l html mte3y :
  dayEl.innerText=d
  hourEl.innerText=h
  minuteEl.innerText=m
  secondEl.innerText=s
  setTimeout(updateCountdown,1000)
}
