<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function quizes()
    {
        $quizListMock= array(
            array('value'=> '0','text'=>'Ģeogrāfija'),
            array('value'=>'1','text'=>'Galvaspilsētas'),
            array('value'=> '2','text'=>'Matemātika'),
        );
        // $quizListMock = array(array('value' =>'1', 'text' =>'Ģeogrāfija'));
        return $quizListMock;
    }

    public function quiz($id){
        $quizMock = array(
            //Pirmais tests;
            '0'=> array(                
                array(
                    'title'=> 'Kāda ir zemeslodes forma?', 'questionId'=>'0', 
                    'options' => array(
                        array('text'=>'Plakana', 'value'=>'0'),
                        array('text'=>'Perfekta lode', 'value'=>'1'),
                        array('text'=>'Elipsveidīga lode', 'value'=>'2'),
                    )
                ),

                array(
                    'title'=> 'Kāda ir zemeslodes forma?', 'questionId'=>'0', 
                    'options' => array(
                        array('text'=>'Plakana', 'value'=>'0'),
                        array('text'=>'Perfekta lode', 'value'=>'1'),
                        array('text'=>'Elipsveidīga lode', 'value'=>'2'),
                    )
                )
            ),      
            //Otrais tests;
            '1'=> array(                
                array(
                    'title'=> 'Latvijas galvaspilsēta ir..', 'questionId'=>'100', 
                    'options' => array(
                        array('text'=>'Tallina', 'value'=>'0'),
                        array('text'=>'Rīga', 'value'=>'1'),
                        array('text'=>'Koperniks', 'value'=>'2'),
                        array('text'=>'Daugavgrīva', 'value'=>'3'),
                    )
                ),

                array(
                    'title'=> 'Kāda ir zemeslodes forma?', 'questionId'=>'101', 
                    'options' => array(
                        array('text'=>'Plakana', 'value'=>'0'),
                        array('text'=>'Perfekta lode', 'value'=>'1'),
                        array('text'=>'Elipsveidīga lode', 'value'=>'2'),
                    )
                )
            ),         
            );
 /*
            array('title'=> '', 'questionId'=>'0', 'options' => array(
                array('text'=>'', 'value'=>''),
                array('text'=>'', 'value'=>''),
            ))

            */

        return $quizMock[$id];
    }

    public function checkanswer($id, $aid){
        $answersMock = 
        array(
            //Tests0 
            '0' => '2', //jautājuma ID => pareizās atbildes ID;
            '1' => '1',

            //Tests1
            '100' => '2', 
            '101' => '1',
        );         
        return $answersMock[$id] == $aid ? "true" : "false" ;
    }
}
