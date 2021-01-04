# Group allocate

### Problem:
Automatically allocate N number of people into smaller groups of P participants per short
meetings/sessions of TpM minutes in R number of rooms so that each participant rotates
between the rooms and ends up meeting everyone in the group, while minimizing the
amount of repetitive encounters.

Inputs:
N – total number of people
P – optimal number of participants per meeting (anything between 3 - 6)
TpM – recommended length of one meeting/session (anything between 10 – 30 minutes)
T – total amount of time available to run all meetings/sessions (anything between 0.5 –
2.5hrs)
Based on the above inputs, you will need to derive:
R – total number of rooms to have meetings simultaneously
S – total number of sessions
And the code will need to allocate all participants into Rooms during each Session so that at
the end of the day each participant meets everyone else in the Group while minimizing the
amount of repetitive encounters if impossible to avoid.