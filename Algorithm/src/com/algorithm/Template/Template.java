package com.algorithm.Template;

// util package import 
import java.util.*;

// Buffer �� ����� ��� io package import
import java.io.*;

public class Template {
	public static void main(String args[]) throws Exception {
		// Scanner
		Scanner sc = new Scanner(System.in);
		
		
		// BufferedReader
		BufferedReader br = null;
		BufferedWriter bw = null;
		
		br = new BufferedReader(new InputStreamReader(System.in));
		
		// br.readLine(); ���� �б� : return String
		StringTokenizer st = new StringTokenizer(br.readLine()); // �����ڷ� ����
		st.nextToken(); // cursor�� ���������� �̵��ϸ鼭 string ����
		
		//
		bw.write("�� �Է�"); // �ٺ��� +"\n" �߰�
		bw.flush();
		if(bw != null) bw.close();
		if(br != null) br.close();
			
			
	}
}
