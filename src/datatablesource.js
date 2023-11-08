export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Hostel Name",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Tanzeel",
      img: "https://scontent.flhe3-1.fna.fbcdn.net/v/t39.30808-6/175121863_2026615004158363_4199258106693524057_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF9IDdCbwfPaksM-8wQsB-fazYafMqZWs1rNhp8yplazUbhrEsH_Uito0FLCwmZ0Rb9Orz7dsxGK0eYPuFZS1aE&_nc_ohc=PuE11egXbSMAX-XBCzN&_nc_ht=scontent.flhe3-1.fna&oh=00_AfB8J9DDgMTOSQ8iOKqXWHe0lwsmtcb2iDFBYuSp_PHl7Q&oe=654EC4F0",
      status: "active",
      email: "tanzeelelahi16@gmail.com",
      age: "Shes Hostel",
    },
    {
      id: 2,
      username: "Bilal",
      img: "https://scontent.flhe3-2.fna.fbcdn.net/v/t39.30808-6/331532951_573668074447784_6289010439050750834_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF9U0C1mgPoAZbAdBHCkSOGaiVo7j-92K9qJWjuP73Yr54rrIlmbtaf57o9Wh8mVEayFJE1DD6GqbN74Hma6RLH&_nc_ohc=EgPkYwJR6noAX-H40ib&_nc_ht=scontent.flhe3-2.fna&oh=00_AfCWNriPlZT6nb5gRJh_Od7Gu0rZHn21bBzi_N2dOVOYCQ&oe=654D0CDD",
      email: "bilalzafar@gmail.com",
      status: "passive",
      age: "Abbasi Hostel",
    },
    {
      id: 3,
      username: "Sobia",
      img: "data:image/jpeg;base64,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",
      email: "sobia@gmail.com",
      status: "pending",
      age: "Hosteller",
    },
    {
      id: 4,
      username: "Taha",
      img: "https://scontent.flhe3-2.fna.fbcdn.net/v/t39.30808-6/362276065_668067328569284_7104912552719568903_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEdoB9SNaeC4Amqk6eGRJ31nCkOoxf_9kWcKQ6jF__2Rb1kFjon-4feE5_qCqebdfO9gGcBEwbFJ_NvBk-U71Oi&_nc_ohc=ivioS18_JFMAX_m3nRs&_nc_oc=AQlu9Z4lTPb4zSJ69x6p6IoRxtzPHWt2J5JxZPPEpBh_01wsjFEB1vezQrzNVV7yIoY&_nc_ht=scontent.flhe3-2.fna&oh=00_AfDlg3OFkUaVM2_T_upJgJa4Ovs1Qwd6soe0bdeVITAi9Q&oe=654D27E1",
      email: "taha12@gmail.com",
      status: "active",
      age: "Continental Hostel",
    },
    {
      id: 5,
      username: "Subhan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "subhan5@gmail.com",
      status: "passive",
      age: "Red sky Hostel",
    },
    {
      id: 6,
      username: "Junaid",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "junaid@gmail.com",
      status: "active",
      age: "Polo Hostel",
    },
    {
      id: 7,
      username: "Hassan",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "hassan@gmail.com",
      status: "passive",
      age: "Zaha Hostel",
    },
    {
      id: 8,
      username: "Ali",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "ali123@gmail.com",
      status: "active",
      age: "Uptown Hostel",
    },
    {
      id: 9,
      username: "Sarmad",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "sarmad@gmail.com",
      status: "pending",
      age: "Downtown Hostel",
    },
    {
      id: 10,
      username: "Atif",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "atif@gmail.com",
      status: "active",
      age: "Youth Hostel",
    },
  ];