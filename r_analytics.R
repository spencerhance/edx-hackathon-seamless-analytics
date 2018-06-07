library("ggplot2")

data <- read.csv("/Users/crogers/Desktop/edx-hackathon-seamless-analytics/message-data.csv")
data$date <- substr(data$datetime,1,10)
data$time <- substr(data$datetime, 12, 16)
data$day <- weekdays(as.Date(data$date))
data <- data[data$day == "Monday" ||  data$day == "Wednesday" || data$day == "Thursday",]
data$delta <- 0

for(i in 1:nrow(data)){
  if (data[i,]$day == "Wednesday"){
    data[i,]$delta <- as.numeric(difftime(as.POSIXct(data[i,]$time, format='%H:%M'), as.POSIXct("12:30", format='%H:%M'), units = "mins"))
  }
  else{
    data[i,]$delta <- as.numeric(difftime(as.POSIXct(data[i,]$time, format='%H:%M'), as.POSIXct("12:00", format='%H:%M'), units = "mins"))
  }
}

alf <- data[data$restaurant == "Alfredo's",]
veg <- data[data$restaurant == "Veggie Crust",]
bai <- data[data$restaurant == "Bailey and Sage",]
tos <- data[data$restaurant == "Tossed",]
sug <- data[data$restaurant == "Sugar and Spice",]
ind <- data[data$restaurant == "India Palace",]
viv <- data[data$restaurant == "Viva Burrito",]
bea <- data[data$restaurant == "Beantown Taqueria",]
caf <- data[data$restaurant == "Cafe 472",]
roy <- data[data$restaurant == "Royal East Restaurant",]
bei <- data[data$restaurant == "Beijing Tokyo",]
pav <- data[data$restaurant == "Pavia",]
the <- data[data$restaurant == "Thelonius Monkfish",]
fal <- data[data$restaurant == "Falafel Place",]

min(as.numeric(tos$delta))
max(as.numeric(tos$delta))
rest <- list(alf, veg, bai, tos, sug, ind, viv, bea, caf, roy, bei, pav, the, fal)



ggplot(data = tos, aes(x = as.Date(date), y = delta)) +
  geom_point() +
  labs(x = "Date", y = "Delta", title = "Tossed") + 
  geom_smooth(method='lm',formula=y~x) + 
  coord_cartesian(ylim=c(-60,60)) + 
  scale_y_continuous(breaks = seq(-60, 60, by = 10))

ggplot(data = bai, aes(x = as.Date(date), y = delta)) +
  geom_point() +
  labs(x = "Date", y = "Delta", title = "Bailey and Sage") +
  geom_smooth(method='lm',formula=y~x) + 
  coord_cartesian(ylim=c(-60,60)) + 
  scale_y_continuous(breaks = seq(-60, 60, by = 10)) 

ggplot(data = fal, aes(x = as.Date(date), y = delta)) +
  geom_point() +
  labs(x = "Date", y = "Delta", title = "Falafel Place") +
  geom_smooth(method='lm',formula=y~x)+ 
  coord_cartesian(ylim=c(-60,60)) + 
  scale_y_continuous(breaks = seq(-60, 60, by = 10)) 

ggplot(data = ind, aes(x = as.Date(date), y = delta)) +
  geom_point() +
  labs(x = "Date", y = "Delta", title = "ind") +
  geom_smooth(method='lm',formula=y~x)+ 
  coord_cartesian(ylim=c(-60,60)) + 
  scale_y_continuous(breaks = seq(-60, 60, by = 10)) 


ggplot(data = sug, aes(x = as.Date(date), y = delta)) +
  labs(x = "Date", y = "Time Delta (Minutes)",
       title = "Smoothed Time Delta For Each Restaurant Over Time") +
  geom_smooth(data = alf, method='lm',formula=y~x, aes(colour="Alfredo's"), se = FALSE) + 
  geom_smooth(data = bai, method='lm',formula=y~x, aes(colour="Bailey and Sage"), se = FALSE) + 
 # geom_smooth(data = bea, method='lm',formula=y~x, aes(colour="Beantown Taqueria"), se = FALSE) +
  geom_smooth(data = bei, method='lm',formula=y~x, aes(colour="Beijing Tokyo"), se = FALSE) +
  geom_smooth(data = caf, method='lm',formula=y~x, aes(colour="Cafe 472"), se = FALSE) +
  geom_smooth(data = fal, method='lm',formula=y~x, aes(colour="Falafel Place"), se = FALSE) +
  geom_smooth(data = ind, method='lm',formula=y~x, aes(colour="India Palace"), se = FALSE) +
 # geom_smooth(data = pav, method='lm',formula=y~x, aes(colour="Pavia"), se = FALSE) +
#  geom_smooth(data = roy, method='lm',formula=y~x, aes(colour="Royal East Restaurant"), se = FALSE) +
  geom_smooth(data = sug, method='lm',formula=y~x, aes(colour="Sugar and Spice"), se = FALSE) +
  geom_smooth(data = the, method='lm',formula=y~x, aes(colour="Thelonius Monkfish"), se = FALSE) +
  geom_smooth(data = tos, method='lm',formula=y~x, aes(colour="Tossed"), se = FALSE) +
 # geom_smooth(data = veg, method='lm',formula=y~x, aes(colour="Veggie Crust"), se = FALSE) +
  geom_smooth(data = viv, method='lm',formula=y~x, aes(colour="Viva Burrito"), se = FALSE)
