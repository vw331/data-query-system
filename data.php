<?php

if(isset( $_GET['type'] ))
{

	$str = $_GET['type'];

	if( $str == 'changzhu' )
	{	
		$resultArr = array();
		
		for($x=0;$x<100;$x++)
		{
			array_push( $resultArr ,array('id'=> $x ,'indate'=>'2011-03-06','outdate'=>'2013-03-08','room'=>'沁园小区3-8-204','add'=>'杭州市江干区秋涛北路208号','peer'=>'张三、李四') );
		};
		
		sleep( 2 );
		
		echo json_encode( $resultArr );
	};
	
	if( $str == "zanzhu" )
	{
		$resultArr = array();
		
		for($x=0;$x<100;$x++)
		{
			array_push( $resultArr , array( 'id'=> $x , 'indate'=>'2015-03-06','outdate'=>'2015-03-08','hotel'=>'皇冠大酒店','add'=>'杭州市文三路90号东部软件园','peer'=>'王梁、刘丽' ) );
		}
		
		sleep( 2 );
		
		echo json_encode( $resultArr );
	};
	
	if( $str == "zhusu" )
	{
		$resultArr = array();
		
		for($x=0;$x<80;$x++)
		{
			array_push( $resultArr , array( 'id'=> $x , 'indate'=>'2015-03-06','outdate'=>'2015-03-08','hotel'=>'凯悦大酒店','add'=>'杭州市西湖区湖滨路208','peer'=>'林志玲' ) );
		};
		
		sleep( 2 );
		
		echo json_encode( $resultArr );
	};

	
}

?>