export const store = {
	debug: false,
	config: {
		fontSizeMin: 80,
		fontSizeMax: 210,
		sounds: ["Ring", "Notification uprising"]
	},
	state: {
		showSettings: false,
		settings: {
			onZeroAction: 0,
			soundIndex: 0,
			soundRepeat: true,
			is24hours: false,
			snooze: false,
			snoozeMinutes: 5,
			fontSize: 120,
			fontColor: "black",
			backgroundColor: "light",
			backgroundImage: "mountains.jpg"
		},
		timeSet: {
			hours: 0,
			minutes: 30,
			seconds: 0
		},
		timerAlarm: {
			hours: 2,
			minutes: 30,
			seconds: 0
		},
		timeRestartAfter: {
			hours: 0,
			minutes: 0,
			seconds: 2
		}
	}
};
