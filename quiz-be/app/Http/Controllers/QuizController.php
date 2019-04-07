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
        return $quizListMock;
    }

    public function quiz($id){
        $quizMock = array(
            //Pirmais tests;
            '0'=> array(                
                array(
                    'title'=> 'Kāda ir zemeslodes forma?', 'questionId'=>'01', 
                    'options' => array(
                        array('text'=>'Plakana', 'value'=>'0'),
                        array('text'=>'Perfekta lode', 'value'=>'1'),
                        array('text'=>'Elipsveidīga lode', 'value'=>'2'),
                    )
                ),
                array(
                    'title'=> 'Kura ir Latvijas garākā upe?', 'questionId'=>'02', 
                    'options' => array(
                        array('text'=>'Daugava', 'value'=>'0'),
                        array('text'=>'Gauja', 'value'=>'1'),
                        array('text'=>'Lielupe', 'value'=>'2'),
                        array('text'=>'Venta', 'value'=>'3'),
                    )
                ),
                array(
                    'title'=> 'Kura ir pasaulē augstākā virsotne?', 'questionId'=>'03', 
                    'options' => array(
                        array('text'=>'Everests', 'value'=>'0'),
                        array('text'=>'Monblāns', 'value'=>'1'),
                        array('text'=>'Gaiziņš', 'value'=>'2'),
                        array('text'=>'Kilimandžāro', 'value'=>'3'),
                    )
                )
            ),      
            //Otrais tests;
            '1'=> array(                
                array(
                    'title'=> 'Latvijas galvaspilsēta ir..', 'questionId'=>'11', 
                    'options' => array(
                        array('text'=>'Tallina', 'value'=>'0'),
                        array('text'=>'Rīga', 'value'=>'1'),
                        array('text'=>'Koperniks', 'value'=>'2'),
                        array('text'=>'Daugavgrīva', 'value'=>'3'),
                    )
                ),
                array(
                    'title'=> 'Igaunijas galvaspilsēta ir..', 'questionId'=>'12', 
                    'options' => array(
                        array('text'=>'Tallina', 'value'=>'0'),
                        array('text'=>'Pērnava', 'value'=>'1'),
                    )
                    ),
                array(
                    'title'=> 'Vācijas galvaspilsēta ir..', 'questionId'=>'13', 
                    'options' => array(
                        array('text'=>'Minhene', 'value'=>'0'),
                        array('text'=>'Parīze', 'value'=>'1'),
                        array('text'=>'Roma', 'value'=>'2'),
                        array('text'=>'Berlīne', 'value'=>'3'),
                    )
                )
            ),
            //Trešais tests;
            '2'=> array(                
                array(
                    'title'=> '8 * 4', 'questionId'=>'21', 
                    'options' => array(
                        array('text'=>'32', 'value'=>'0'),
                        array('text'=>'24', 'value'=>'1'),
                        array('text'=>'28', 'value'=>'2'),
                        array('text'=>'36', 'value'=>'3'),
                    )
                ),
                array(
                    'title'=> '10 * 0', 'questionId'=>'22', 
                    'options' => array(
                        array('text'=>'10', 'value'=>'0'),
                        array('text'=>'0', 'value'=>'1'),
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
            '01' => '2', //jautājuma ID => pareizās atbildes ID;
            '02' => '1',
            '03' => '0',

            //Tests1
            '11' => '1', 
            '12' => '0',
            '13' => '3',

            //Tests2
            '21' => '0', 
            '22' => '1',
        );         
        return $answersMock[$id] == $aid ? "true" : "false" ;
    }
}
