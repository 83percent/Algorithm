package com.algorithm.Template;

// util package import 
import java.util.*;

// Buffer 를 사용할 경우 io package import
import java.io.*;

public class Template {
	public static void main(String args[]) throws Exception {
		// Scanner
		Scanner sc = new Scanner(System.in);
		
		
		// BufferedReader
		BufferedReader br = null;
		BufferedWriter bw = null;
		
		br = new BufferedReader(new InputStreamReader(System.in));
		
		// br.readLine(); 으로 읽기 : return String
		StringTokenizer st = new StringTokenizer(br.readLine()); // 구분자로 나뉨
		st.nextToken(); // cursor가 다음것으로 이동하면서 string 리턴
		
		//
		bw.write("답 입력"); // 줄변경 +"\n" 추가
		bw.flush();
		if(bw != null) bw.close();
		if(br != null) br.close();
			
			
	}
}
